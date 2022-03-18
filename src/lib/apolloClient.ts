import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: `${(process.env.API_SERVER_URL)}/graphql`,
});

const authLink = setContext(async (_, {headers}) => {
  const token = ''
  return {
    headers: {
      ...headers,
      authorization: token,
    }
  }
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default apolloClient;
