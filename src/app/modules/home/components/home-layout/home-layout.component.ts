import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/modules/characters/interfaces/character';
import { IPageInfo } from '../../interfaces/characters-response';
import { StarWarsCharactersService } from '../../services/star-wars-characters.service';

@Component({
  selector: 'sw-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  isLoading = true;
  getPeople$ = this.starWarsCharacters.getCharacters();
  characters: ICharacter[] = [];
  pagination: IPageInfo | null = null;

  constructor(private starWarsCharacters: StarWarsCharactersService) {}

  ngOnInit(): void {
    this.getPeople$.valueChanges.subscribe(
      ({
        data: {
          allPeople: { people, pageInfo },
        },
      }) => {
        this.characters = people;
        this.pagination = pageInfo;
      }
    );
  }

  retrieveMoreCharacters(): void {
    if (this.pagination?.hasNextPage) {
      this.starWarsCharacters.requestMoreCharacters(
        this.getPeople$,
        this.pagination.endCursor
      );
    }
  }
}
