import { gql } from '@apollo/client';

export const GET_CURRENT_USER_DATA = gql` 
  query GetCurrentUserData {
    getCurrentUser {
      id
      fullName
      email
    }
  }
`
