"use client";

import { Week } from "@prisma/client";
import WeekSummaryCard from "@/components/weeks/week-summary-card";

interface WeekListProps {
  weeks: Week[];
  selectedWeek: Week | null;
  setSelectedWeek: (week: Week) => void;
}

export default function WeekList({
  weeks,
  selectedWeek,
  setSelectedWeek,
}: WeekListProps) {
  return (
    <div className="season-overview">
      Season Overview
      <ul>
        {weeks.map((week) => (
          <WeekSummaryCard
            key={week.id}
            week={week}
            isSelected={week === selectedWeek}
            onClickHander={setSelectedWeek}
          />
        ))}
      </ul>
    </div>
  );
}
