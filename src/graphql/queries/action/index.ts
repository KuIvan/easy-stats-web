import { gql } from '@apollo/client';

export const FETCH_CURRENT_USER_ACTIONS_DATA = gql`
  query fetchCurrentUserActionsData($gameId: ID!) {
    fetchCurrentUserActions(gameId: $gameId) {
       id
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
       isSuccessful
     }
  }
`
