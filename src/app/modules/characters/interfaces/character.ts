export interface ICharacter {
  name: string;
  species: ISpecie | null;
  homeworld: IHomeworld | null;
}

interface IHomeworld {
  name: string;
}

interface ISpecie {
  name: string;
}
