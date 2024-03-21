"use client";

import { Match, Practice, Season, Team, Week } from "@prisma/client";
import { useState } from "react";
import WeekList from "../weeks/week-list";
import WeekOverview from "./weekoverview";
import * as utils from "@/utils";
import * as actions from "@/actions";
import FormButton from "../common/form-button";

interface SeasonOverviewProps {
  teamSlug: string;
  season: Season;
  weeks: Week[];
  practices: Practice[];
  matches: Match[];
}

export default function SeasonOverview({
  teamSlug,
  season,
  weeks,
  practices,
  matches,
}: SeasonOverviewProps) {
  //console.log("SeasonOverview", teamSlug);
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);

  if (!selectedWeek) {
    const now = new Date().getTime();
    weeks.forEach((week) => {
      const endDate = utils.addDays(week.weekStart, 7);
      if (now >= week.weekStart.getTime() && now <= endDate.getTime()) {
        setSelectedWeek(week);
      }
    });
  }

  return (
    <div className="main">
      {/* <form action={actions.deleteSeason(season.id)}>
        <FormButton>Delete Season</FormButton>
      </form> */}

      <WeekList
        weeks={weeks}
        selectedWeek={selectedWeek}
        // {selectedWeek}
        setSelectedWeek={setSelectedWeek}
      />
      <WeekOverview
        teamSlug={teamSlug}
        seasonSlug={season.slug}
        week={selectedWeek}
        practices={practices}
        matches={matches}
      />
    </div>
  );
}
