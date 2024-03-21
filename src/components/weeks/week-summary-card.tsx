"use client";

import { Week } from "@prisma/client";

export interface WeekSummaryCardProps {
  week: Week;
  isSelected: boolean;
  onClickHander: (week: Week) => void;
}

export default function WeekSummaryCard({
  week,
  isSelected,
  onClickHander,
}: WeekSummaryCardProps) {
  return (
    <li
      style={{ cursor: "pointer" }}
      onClick={() => onClickHander(week)}
      className={isSelected ? "season-card-selected" : "season-card"}
    >
      Week {week.weekNumber} {week.weekStart.toDateString()}
    </li>
  );
}
