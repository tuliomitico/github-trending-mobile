import { gql } from '@apollo/client';

export const queryRepo = gql`
  {
    search(query: "stars:>80000", type: REPOSITORY, first: 15) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            primaryLanguage {
              name
            }
            description
            stargazerCount
            forkCount
          }
        }
      }
    }
  }
`;
