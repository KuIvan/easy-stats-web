import { gql } from '@apollo/client';

export const GET_ALL_USER_GOALS_DATA = gql`
  query getAllUserGoalsData($userId: ID!) {
    getAllUserGoals(userId: $userId) {
      gamesCount
      goalsCount
      assistsCount
      yellowCardsCount
      redCardsCount
     }
  }
`
