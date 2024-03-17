"use server";
import { z } from "zod";
import { auth } from "@/auth";
import { Team } from "@prisma/client";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateTeamFormState {
  errors: {
    name?: string[];
    abbreviation?: string[];
    description?: string[];
    _form?: string[];
  };
}

const createTeamSchema = z.object({
  name: z.string().min(3).max(100),
  abbreviation: z
    .string()
    .min(1)
    .max(10)
    .regex(/^[a-zA-Z-]+$/, {
      message: "Must be letters or dashes without spaces",
    }),
  description: z.string().min(10),
});

export async function createTeam(
  formState: CreateTeamFormState,
  formData: FormData
): Promise<CreateTeamFormState> {
  console.log("Create Team server action");

  const result = createTeamSchema.safeParse({
    name: formData.get("name"),
    abbreviation: formData.get("abbreviation"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  // const session = await auth();

  // if (!session || !session.user) {
  //   return {
  //     errors: {
  //       _form: ["You must be signed in to create a team"],
  //     },
  //   };
  // }

  // revalidate home page

  let team: Team;
  try {
    team = await db.team.create({
      data: {
        name: result.data.name,
        slug: result.data.abbreviation,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    console.log("Error creating team", err);
    return {
      errors: {
        _form: ["An error occurred while creating the team"],
      },
    };
  }

  revalidatePath(paths.home());

  redirect(paths.teamHome(team.id));
}
