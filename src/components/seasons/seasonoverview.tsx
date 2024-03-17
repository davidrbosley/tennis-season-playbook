"use client";

import SeasonWeekCard from "./seasoncard";

var week_list = [
  {
    name: "week1",
    date: "2021-09-01",
    opponent: "Hillsboro",
    location: "Home",
  },
  {
    name: "week2",
    date: "2021-09-08",
    opponent: "Jefferson",
    location: "Away",
  },
  { name: "week3", date: "2021-09-15", opponent: "Madison", location: "Home" },
  { name: "week4", date: "2021-09-22", opponent: "Franklin", location: "Away" },
  {
    name: "week5",
    date: "2021-09-29",
    opponent: "Washington",
    location: "Home",
  },
  { name: "week6", date: "2021-10-06", opponent: "Adams", location: "Away" },
  { name: "week7", date: "2021-10-13", opponent: "Monroe", location: "Home" },
  { name: "week8", date: "2021-10-20", opponent: "Lincoln", location: "Away" },
];

export default function SeasonOverview() {
  return (
    <div className="season-overview">
      Season Overview
      <ul>
        {week_list.map((week) => (
          <SeasonWeekCard
            key={week.name}
            name={week.name}
            date={week.date}
            opponent={week.opponent}
            location={week.location}
          />
        ))}
      </ul>
    </div>
  );
}
