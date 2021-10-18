import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { GET_CHARACTERS } from '../graph/queries/get-characters';
import { ICharactersRequestVariables } from '../interfaces/characters-request-variables';
import { ICharactersResponse } from '../interfaces/characters-response';

@Injectable()
export class StarWarsCharactersService {
  constructor(private apollo: Apollo) {}

  getCharacters(
    after = '',
    first = 5
  ): QueryRef<ICharactersResponse, ICharactersRequestVariables> {
    return this.apollo.watchQuery<
      ICharactersResponse,
      ICharactersRequestVariables
    >({
      query: GET_CHARACTERS,
      variables: { first, after },
    });
  }

  requestMoreCharacters(
    reference: QueryRef<ICharactersResponse, ICharactersRequestVariables>,
    after: string
  ) {
    reference.fetchMore({
      variables: {
        ...reference.variables,
        after,
      },
      updateQuery: (previous, { fetchMoreResult }) => {
        return {
          allPeople: {
            pageInfo:
              fetchMoreResult?.allPeople.pageInfo ??
              previous.allPeople.pageInfo,
            people: [
              ...previous.allPeople.people,
              ...(fetchMoreResult?.allPeople.people ?? []),
            ],
          },
        };
      },
    });
  }
}
