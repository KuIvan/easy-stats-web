import { gql } from "@apollo/client";

export const GET_PLAYER_GAMES = gql`
  query FetchGames($pagination: Pagination!) {
  fetchGames(pagination: $pagination) {
    nodes {
      id
      status
      gameDay
    }
  }
}
`
