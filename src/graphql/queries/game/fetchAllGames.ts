import { gql } from '@apollo/client';

export const FETCH_ALL_GAMES_DATA = gql` 
  query FetchAllGamesData($pagination: Pagination!) {
    fetchAllGames(pagination: $pagination) {
      id
      status
      gamesSquads {
        goals
        seasonsSquad {
          id
          team {
            id
            name
          }
        }
      }
    }
  }
`
