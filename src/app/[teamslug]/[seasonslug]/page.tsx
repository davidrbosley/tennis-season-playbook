import SeasonOverview from "@/components/seasons/season-overview";
import WeekOverview from "@/components/seasons/weekoverview";

import * as actions from "@/actions";
import { Button } from "@nextui-org/button";
import { db } from "@/db";
import { notFound } from "next/navigation";
import FormButton from "@/components/common/form-button";
import { useState } from "react";
import { Week } from "@prisma/client";
import WeekList from "@/components/weeks/week-list";

interface TeamSeasonHomePageProps {
  params: {
    teamslug: string;
    seasonslug: string;
  };
}

export default async function TeamSeasonHome({
  params,
}: TeamSeasonHomePageProps) {
  const { teamslug, seasonslug: seasonSlug } = params;
  console.log("TeamSeasonHome", teamslug, seasonSlug);

  const team = await db.team.findFirst({
    select: {
      id: true,
      name: true,
      seasons: {
        include: { weeks: true, practices: true, matches: true },
        where: { slug: seasonSlug },
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
  const matches = season.matches;
  const practices = season.practices;

  return (
    <>
      <div>
        <h1>
          {team.name} {season.name}
        </h1>
        {/* <form action={actions.deleteSeason(teamSlug, team.seasons[0].id)}>
  <FormButton>Delete Season</FormButton>
</form> */}
      </div>
      <SeasonOverview
        teamSlug={teamslug}
        season={season}
        weeks={season.weeks}
        matches={matches}
        practices={practices}
      />
    </>
  );
}
