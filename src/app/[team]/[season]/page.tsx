import SeasonOverview from "@/components/seasons/seasonoverview";
import WeekOverview from "@/components/seasons/weekoverview";

export default function TeamSeasonHome() {
  return (
    <div className="main">
      <SeasonOverview />
      <WeekOverview />
    </div>
  );
}
