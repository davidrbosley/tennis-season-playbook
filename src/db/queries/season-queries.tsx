import type { Season } from "@prisma/client";
import { db } from "@/db";

export type SeasonWithTeamData = Season & {
  team: { slug: string; name: string };
};

export function fetchSeasonsNotOverOnDate(
  fromDate: Date
): Promise<SeasonWithTeamData[]> {
  return db.season.findMany({
    where: { seasonEnd: { gt: fromDate } },
    include: {
      team: { select: { slug: true, name: true } },
    },
  });
}
