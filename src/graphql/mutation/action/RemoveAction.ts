import { gql } from '@apollo/client';

export const REMOVE_ACTION = gql`
  mutation RemoveAction($id: ID!) {
    removeAction(input: { params: {id: $id }}) {
      action {
        id
      }
    }
  }
`
