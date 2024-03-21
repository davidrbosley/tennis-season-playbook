"use server";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteSeason(seasonId: string) {
  console.log("Delete Season server action");

  try {
    await db.season.delete({
      where: {
        id: seasonId,
      },
    });
  } catch (err: unknown) {
    console.log("Error deleting season", err);
    // return {
    //   errors: {
    //     _form: ["An error occurred while deleting the season"],
    //   },
    // };
  }

  // Mark relevant pages stale
  //   revalidatePath(paths.teamHome(teamSlug));
  //   revalidatePath(paths.home());

  //   redirect(paths.teamHome(teamSlug));
}
