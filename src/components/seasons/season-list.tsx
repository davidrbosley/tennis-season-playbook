import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

interface SeasonListProps {
  teamSlug: string;
}

export default async function SeasonList({ teamSlug }: SeasonListProps) {
  const seasons = await db.season.findMany();

  const renderedSeasons = seasons.map((season) => {
    return (
      <div key={season.id}>
        <Link href={paths.teamSeasonHome(teamSlug, season.slug)}>
          <Chip color="warning" variant="shadow">
            {season.name}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedSeasons}</div>;
}
