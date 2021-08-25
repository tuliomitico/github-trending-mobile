import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { GITHUB_ACCESS_TOKEN } from '@env';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `bearer ${GITHUB_ACCESS_TOKEN}`,
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
