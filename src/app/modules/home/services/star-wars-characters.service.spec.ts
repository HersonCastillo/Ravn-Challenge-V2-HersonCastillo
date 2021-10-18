import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from 'src/app/graphql.module';
import { HomeModule } from '../home.module';

import { StarWarsCharactersService } from './star-wars-characters.service';

describe('StarWarsCharactersService', () => {
  let service: StarWarsCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeModule],
    });
    service = TestBed.inject(StarWarsCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
