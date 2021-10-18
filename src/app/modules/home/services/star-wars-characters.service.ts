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
}
