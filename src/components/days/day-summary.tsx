"use client";

import paths from "@/paths";
import { dayInfo } from "@/types";
import Link from "next/link";
import { redirect } from "next/navigation";

export interface DaySummaryCardProps {
  teamSlug: string;
  seasonSlug: string;
  day: dayInfo;
  //   onClickHander: (day: dayInfo) => void;
}

export default function DaySummaryCard({
  day,
  teamSlug,
  seasonSlug,
}: DaySummaryCardProps) {
  //console.log("DaySummaryCard", day, teamSlug, seasonSlug);

  return (
    <Link href={paths.teamSeasonDay(teamSlug, seasonSlug, day.date)}>
      <li
        className={day.isMatch ? "week-card-match" : "week-card-practice"}
        style={{ cursor: "pointer" }}
      >
        <h3>{day.date.toDateString()}</h3>
        <p>{day.isMatch ? "Match" : "Practice"}</p>
      </li>
    </Link>
  );
}
