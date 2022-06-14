import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
// src
import { setJWTBearerToken } from 'src/utils/apiUtils/storage.config'

const httpLink = createHttpLink({
  uri: `${(process.env.API_SERVER_URL)}/graphql`,
});

const authLink = setContext(async (_, {headers}) => {
  const token = await setJWTBearerToken()
  return {
    headers: {
      ...headers,
      Authorization: 'Bearer ' + token,
    }
  }
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default apolloClient;
