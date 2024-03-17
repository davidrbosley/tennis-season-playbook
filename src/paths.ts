const paths = {
  home() {
    return "/";
  },
  teamHome(teamSlug: string) {
    return `/${teamSlug}`;
  },
  players() {
    return `/players`;
  },
  player(playerId: string) {
    return `/players/${playerId}`;
  },
  opponents(teamSlug: string) {
    return `/${teamSlug}/opponents`;
  },
  opponent(teamSlug: string, opponentId: string) {
    return `/${teamSlug}/opponents/${opponentId}`;
  },
  teamSeasonHome(teamSlug: string, season: string) {
    return `/${teamSlug}/${season}`;
  },
  teamSeasonRoster(teamSlug: string, season: string) {
    return `/${teamSlug}/${season}/roster`;
  },
  teamSeasonSettings(teamSlug: string, season: string) {
    return `/${teamSlug}/${season}/settings`;
  },
  teamSeasonWeek(teamSlug: string, season: string, week: string) {
    return `/${teamSlug}/${season}/${week}`;
  },
  teamSeasonWeekDay(
    teamSlug: string,
    season: string,
    week: string,
    day: string
  ) {
    return `/${teamSlug}/${season}/${week}/${day}`;
  },
  teamSeasonMatches(teamSlug: string, season: string) {
    return `/${teamSlug}/${season}/matches`;
  },
  teamSeasonMatch(teamSlug: string, season: string, matchId: string) {
    return `/${teamSlug}/${season}/matches/${matchId}`;
  },
  library() {
    return `/library`;
  },
};

export default paths;
