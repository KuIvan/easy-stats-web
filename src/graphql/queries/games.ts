import { gql } from "@apollo/client";

export const GET_PLAYER_GAMES = gql`
  query FetchGames($pagination: Pagination!) {
  fetchGames(pagination: $pagination) {
    nodes {
      id
      status
      gameDay
      gamesSquads {
        id
        status
        goals
        seasonsSquad {
          id
          team {
            id
            name
            teamPhoto
          }
        }
      }
      stage {
        id
        season {
          id
          finishedAt
          startedAt
          league {
            id
            name
            tournament {
              id
              name
            }
          }
        } 
      }
    }
  }
}
`
