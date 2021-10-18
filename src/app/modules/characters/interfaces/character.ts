export interface ICharacter {
  name: string;
  species: ISpecie | null;
  homeworld: IHomeworld | null;
  eyeColor: string;
  skinColor: string;
  birthYear: string;
  hairColor: string;
  vehicleConnection: {
    vehicles: IVehicles[];
  };
}

interface IVehicles {
  name: string;
}

interface IHomeworld {
  name: string;
}

interface ISpecie {
  name: string;
}
