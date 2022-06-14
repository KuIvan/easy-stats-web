import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation (
    $email: String!
    message: String!
  ){ createMessage (
     input: {
        params: {
          email: $email,
          message: $message
        }
     }
  ){
    clientMutationId 
  }  
 }
`
