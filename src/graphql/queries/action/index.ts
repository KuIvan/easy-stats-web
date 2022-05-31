import { gql } from '@apollo/client';

export const GAME_ACTIONS = gql`
  mutation gameActions($id: ID!) {
    addAction(id: $id) {
      action {
          id
          game {
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
                   id
                   }
                 number
                }
              }
            }
          }
        }
      }
    }
  }
`
