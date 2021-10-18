import { TestBed } from '@angular/core/testing';

import { StarWarsCharactersService } from './star-wars-characters.service';

describe('StarWarsCharactersService', () => {
  let service: StarWarsCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
