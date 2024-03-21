"use client";

import { Match, Practice, Week } from "@prisma/client";
import { dayInfo } from "@/types";
import DaySummaryCard from "@/components/days/day-summary";

interface WeekOverviewProps {
  teamSlug: string;
  seasonSlug: string;
  week: Week | null;
  practices: Practice[];
  matches: Match[];
}

// type dayInfo = {
//   date: Date;
//   isMatch: boolean;
//   practice?: Practice;
//   match?: Match;
// };

export default function WeekOverview({
  teamSlug,
  seasonSlug,
  week,
  practices,
  matches,
}: WeekOverviewProps) {
  //console.log("WeekOverview", teamSlug, seasonSlug);
  const days: dayInfo[] = [];

  if (week) {
    if (practices) {
      const weekPractices = practices.filter((practice) => {
        return (
          practice.dayDate >= week.weekStart && practice.dayDate < week.weekEnd
        );
      });
      weekPractices.forEach((practice) => {
        days.push({
          date: practice.dayDate,
          isMatch: false,
          practice: practice,
        });
      });
    }

    if (matches) {
      const weekMatches = matches.filter((match) => {
        return match.dayDate >= week.weekStart && match.dayDate < week.weekEnd;
      });

      weekMatches.forEach((match) => {
        days.push({
          date: match.dayDate,
          isMatch: true,
          match: match,
        });
      });
    }

    days.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });
  }

  return (
    <div className="week-overview">
      <h1>Week Overview</h1>
      {week ? (
        <div>
          <h2>Week {week.weekNumber}</h2>
          {/* <p>Start: {week.weekStart.toDateString()}</p> */}
          {days.map((day) => (
            <DaySummaryCard
              key={day.date.getTime()}
              day={day}
              teamSlug={teamSlug}
              seasonSlug={seasonSlug}
            />
          ))}
        </div>
      ) : (
        <p>No week selected</p>
      )}
    </div>
  );
}
