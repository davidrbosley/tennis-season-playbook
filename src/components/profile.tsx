"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>
        <h1>From client: Signed in as {session.data.user.email}</h1>
      </div>
    );
  }

  return <div>From client: You are not signed in</div>;
}
