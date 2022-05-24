import { gql } from '@apollo/client';

export const GET_GAME_DATA = gql`
  query GetGameData($id: ID!) {
    getGame(id: $id) {
      id
      status
      gamesSquads {
        id
        status
        goals
        gamesSquadsPlayer {
          id
          seasonsSquadsPlayer {
           id 
           teamsPlayer {
             id
             user {
               fullName
             }
             number
           }
          }
        }
      }
    }
  }
`
