import { gql } from '@apollo/client';

export const ADD_ACTION = gql`
  mutation AddAction($initiatorId: ID!, $addressableId: ID, $gameId: ID!, $scope: ActionScopes!, $isSuccessful: Boolean) {
    addAction(input: { params: { initiatorId: $initiatorId, addressableId: $addressableId, scope: $scope, gameId: $gameId, isSuccessful: $isSuccessful} }) {
      action {
        id
        isSuccessful
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
