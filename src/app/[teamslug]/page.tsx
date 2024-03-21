import SeasonCreateForm from "@/components/seasons/season-create-form";
import SeasonList from "@/components/seasons/season-list";
import { db } from "@/db";
import { Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";

interface TeamHomePageProps {
  params: {
    teamslug: string;
  };
}

export default async function TeamHomePage({ params }: TeamHomePageProps) {
  const { teamslug } = params;

  console.log("Team Page slug", teamslug);

  const team = await db.team.findFirst({
    where: { slug: teamslug },
  });

  if (!team) {
    notFound();
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <h1 className="text-xl m-2">{team.name}</h1>
        </div>
        <div>
          <SeasonCreateForm teamId={team.id} teamSlug={team.slug} />
          <Divider className="my-2" />
          <SeasonList teamSlug={team.slug} />
        </div>
      </div>
    </>
  );
}
