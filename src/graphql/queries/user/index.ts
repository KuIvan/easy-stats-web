import { gql } from '@apollo/client';

export const GET_USER_STATISTICS_DATA = gql`
  query GetUserStatisticsData($id: ID!) {
    getUser(id: $id) {
      id
      fullName
      email
    }
  }
`
