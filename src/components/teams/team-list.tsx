import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

export default async function TeamList() {
  const teams = await db.team.findMany();

  const renderedTeams = teams.map((team) => {
    return (
      <div key={team.id}>
        <Link href={paths.teamHome(team.slug)}>
          <Chip color="warning" variant="shadow">
            {team.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTeams}</div>;
}
