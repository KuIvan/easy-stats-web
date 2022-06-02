import { gql } from '@apollo/client';

export const ADD_ACTION = gql`
  mutation AddAction($initiatorId: ID!, $addressableId: ID, $gameId: ID!, $scope: ActionScopes!) {
    addAction(input: { params: { initiatorId: $initiatorId, addressableId: $addressableId, scope: $scope, gameId: $gameId} }) {
      action {
        id
        initiator {
          id
        }
        addressable {
          id
        }
        scope
      }
    }
  }
`
