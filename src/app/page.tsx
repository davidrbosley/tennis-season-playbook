import Image from "next/image";
import SeasonOverview from "@/components/seasonoverview";
import WeekOverview from "@/components/weekoverview";

export default function Home() {
  return (
    <div className="main">
      <SeasonOverview />
      <WeekOverview />
    </div>
  );
}
