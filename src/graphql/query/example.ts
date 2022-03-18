import { gql } from "@apollo/client";

export const GET_EXAMPLES = gql`
  query {
    examples {
      id
      name
    }
  }
`
