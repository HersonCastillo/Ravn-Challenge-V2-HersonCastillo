import { gql } from 'apollo-angular';

export const GET_CHARACTERS = gql`
  query GetPeople($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      people {
        name
        homeworld {
          name
        }
        species {
          name
        }
        eyeColor
        skinColor
        hairColor
        birthYear
        vehicleConnection {
          vehicles {
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
      }
    }
  }
`;
