"use server";
import { util, z } from "zod";
import { auth } from "@/auth";
import { Season } from "@prisma/client";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as utils from "@/utils";

interface CreateSeasonFormState {
  errors: {
    name?: string[];
    slug?: string[];
    seasonStart?: string[];
    seasonEnd?: string[];
    _form?: string[];
  };
}

const createSeasonSchema = z.object({
  name: z.string().min(3).max(100),
  slug: z
    .string()
    .min(1)
    .max(15)
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: "Must be letters, numbers or dashes without spaces",
    }),
  seasonStart: z.date(),
  seasonEnd: z.date(),
});

export async function createSeason(
  teamId: string,
  teamSlug: string,
  formState: CreateSeasonFormState,
  formData: FormData
): Promise<CreateSeasonFormState> {
  console.log("Create Season server action");

  // console.log("startdate", formData.get("seasonStart"));
  // const startDate = new Date(formData.get("seasonStart") as string);

  const result = createSeasonSchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    seasonStart: new Date(formData.get("seasonStart") as string),
    seasonEnd: new Date(formData.get("seasonEnd") as string),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  // const session = await auth();

  // if (!session || !session.user) {
  //   return {
  //     errors: {
  //       _form: ["You must be signed in to create a season"],
  //     },
  //   };
  // }

  // revalidate home page

  let season: Season;
  try {
    season = await db.season.create({
      data: {
        name: result.data.name,
        slug: result.data.slug,
        seasonStart: result.data.seasonStart,
        seasonEnd: result.data.seasonEnd,
        teamId: teamId,
      },
    });

    let weekNumber = 1;
    let weekStart = new Date(result.data.seasonStart);

    // Create weeks for the season
    while (weekStart <= result.data.seasonEnd) {
      const weekending = utils.addDays(weekStart, 7);
      await db.week.create({
        data: {
          weekNumber: weekNumber,
          slug: `week${weekNumber}`,
          goals: "",
          weekStart: weekStart,
          weekEnd: weekending,
          seasonId: season.id,
        },
      });

      weekStart = utils.addDays(weekStart, 7);
      weekNumber++;
    }

    const weekendDays = [0, 6];
    const matchDays = [2, 4];

    // Create matches and practices for each day of the season
    let day = new Date(result.data.seasonStart);
    while (day <= result.data.seasonEnd) {
      const dayOfWeek = day.getDay();
      if (!weekendDays.includes(dayOfWeek)) {
        if (matchDays.includes(dayOfWeek)) {
          await db.match.create({
            data: {
              dayDate: day,
              seasonId: season.id,
              opponent: "",
            },
          });
        } else {
          await db.practice.create({
            data: {
              dayDate: day,
              seasonId: season.id,
              notes: "",
            },
          });
        }
      }
      day = utils.addDays(day, 1);
    }
  } catch (err: unknown) {
    console.log("Error creating season", err);
    return {
      errors: {
        _form: ["An error occurred while creating the season"],
      },
    };
  }

  // Mark relevant pages stale
  revalidatePath(paths.teamHome(teamSlug));
  revalidatePath(paths.home());

  redirect(paths.teamSeasonHome(teamSlug, season.slug));
}
