"use client";

export interface SeasonWeekCardProps {
  name: string;
  date: string;
  opponent: string;
  location: string;
}

export default function SeasonWeekCard(props: SeasonWeekCardProps) {
  return <li className="season-card">{props.name}</li>;
}
