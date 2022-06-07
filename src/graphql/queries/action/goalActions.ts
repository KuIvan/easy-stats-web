import { gql } from '@apollo/client';

export const FETCH_GOAL_ACTIONS_DATA = gql`
  query fetchGoalActionsData($userId: ID!, $goals: Boolean, $assist: Boolean, $redCard: Boolean, $yellowCard: Boolean) {
    fetchGoalActions(userId: $userId, goals: $goals, assist: $assist, redCard: $redCard, yellowCard: $yellowCard) {
      id
      scope
     }
  }
`
