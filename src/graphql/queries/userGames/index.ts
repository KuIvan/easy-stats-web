import { gql } from '@apollo/client';

export const GET_USER_GAMES_DATA = gql`
  query GetUserStatisticsData($id: ID!) {
    getUser(id: $id) {
      id
      fullName
      teamsPlayers {
        team {
          name
          seasonsSquads {
            gamesSquads {
              game {
                actions {
                  scope
                  initiator {
                    id
                  }
                  addressable {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
