export interface GameInterface {
  id: string
  status: string
  gameDay: string
  gamesSquads: GamesSquadInterface[]
  stage: StageInterface
}

export interface GamesSquadInterface {
  id: number
  status: string
  goals: string
  seasonsSquad: SeasonsSquadInterface
}

export interface SeasonsSquadInterface {
  id: number
  team: TeamInterface
}

export interface TeamInterface {
  id: number
  name: string
  teamPhoto: string
}

export interface StageInterface {
  id: number
  season: SeasonInterface
}

export interface SeasonInterface {
  id: number
  finishedAt: string
  startedAt: string
  league: LeagueInterface
}

export interface LeagueInterface {
  id: number
  name: string
  tournament: TournamentInterface
}

export interface TournamentInterface {
  id: number
  name: string
}
