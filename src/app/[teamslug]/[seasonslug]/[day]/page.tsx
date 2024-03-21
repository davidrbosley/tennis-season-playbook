import { db } from "@/db";
import { notFound } from "next/navigation";

interface SeasonDayPageProps {
  params: {
    teamslug: string;
    seasonslug: string;
    day: string;
  };
}

export default async function SeasonDayPage({
  params: { teamslug, seasonslug, day },
}: SeasonDayPageProps) {
  const team = await db.team.findFirst({
    select: {
      id: true,
      name: true,
      seasons: {
        where: { slug: seasonslug },
      },
    },
    where: { slug: teamslug },
  });

  if (!team) {
    notFound();
  }

  if (team.seasons.length === 0) {
    notFound();
  }
  const season = team.seasons[0];

  const dayDate = new Date(day);

  const match = await db.match.findFirst({
    where: { dayDate: dayDate, seasonId: season.id },
  });
  const practice = await db.practice.findFirst({
    where: { dayDate: dayDate, seasonId: season.id },
  });

  return (
    <div>
      Season Day {teamslug} {seasonslug} {day}
    </div>
  );
}
