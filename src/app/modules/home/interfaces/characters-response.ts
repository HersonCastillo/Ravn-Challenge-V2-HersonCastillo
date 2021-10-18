import { ICharacter } from '../../characters/interfaces/character';

export interface ICharactersResponse {
  allPeople: {
    people: ICharacter[];
  };
  pageInfo: IPageInfo;
}

export interface IPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
}
