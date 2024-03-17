import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";
import { SeasonWithTeamData } from "@/db/queries/season-queries";

interface TeamSeasonListProps {
  teamSeasons: SeasonWithTeamData[];
}

export default async function TeamSeasonList({
  teamSeasons,
}: TeamSeasonListProps) {
  const renderedSeasons = teamSeasons.map((season) => {
    return (
      <div key={season.id}>
        <Link href={paths.teamSeasonHome(season.team.slug, season.slug)}>
          <Chip color="warning" variant="shadow">
            {season.team.slug}-{season.name}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedSeasons}</div>;
}
