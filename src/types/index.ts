import { Match, Practice } from "@prisma/client";

type dayInfo = {
  date: Date;
  isMatch: boolean;
  practice?: Practice;
  match?: Match;
};

export type { dayInfo };
