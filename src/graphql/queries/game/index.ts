import { gql } from '@apollo/client';

export const GET_GAME_DATA = gql`
  query GetGameData($id: ID!) {
    getGame(id: $id) {
      id
      status
      actions {
        id
        isSuccessful
        initiator {
          seasonsSquadsPlayer {
            teamsPlayer {
              number
              user {
                fullName
                id
              }
            }
          }
        }
        addressable {
          seasonsSquadsPlayer {
            teamsPlayer {
              number
              user {
                fullName
                id
              }
            }
          }
        }
        scope
      }
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
               id
             }
             number
           }
          }
        }
      }
    }
  }
`
