import { Button, Divider, divider } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";
import TeamCreateForm from "@/components/teams/team-create-form";
import TeamList from "@/components/teams/team-list";
import { db } from "@/db";
import { fetchSeasonsNotOverOnDate } from "@/db/queries/season-queries";
import TeamSeasonList from "@/components/teams/team-season-list";

export default async function Home() {
  const session = await auth();

  const teamSeasons = await fetchSeasonsNotOverOnDate(new Date());

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Team Seasons</h1>
        <TeamSeasonList teamSeasons={teamSeasons} />
      </div>
      <div>
        <TeamCreateForm />
        <Divider className="my-2" />
        <TeamList />
      </div>
    </div>
  );
}
