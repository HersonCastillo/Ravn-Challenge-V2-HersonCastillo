import { Component, OnInit } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { ICharacter } from 'src/app/modules/characters/interfaces/character';
import { IPageInfo } from '../../interfaces/characters-response';
import { StarWarsCharactersService } from '../../services/star-wars-characters.service';
import { catchError, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sw-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  isLoading = true;
  isError = false;
  getPeople$ = this.starWarsCharacters.getCharacters();
  characters: ICharacter[] = [];
  pagination: IPageInfo | null = null;

  private destroy$ = new Subject();

  constructor(private starWarsCharacters: StarWarsCharactersService) {}

  ngOnInit(): void {
    this.getPeople$.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.isError = true;
          return throwError(error);
        })
      )
      .subscribe(
        ({
          data: {
            allPeople: { people, pageInfo },
          },
          loading,
        }) => {
          this.isLoading = loading;
          this.characters = people;
          this.pagination = pageInfo;
        }
      );
  }

  retrieveMoreCharacters(): void {
    if (this.pagination?.hasNextPage && !this.isLoading && !this.isError) {
      this.isLoading = true;
      this.starWarsCharacters.requestMoreCharacters(
        this.getPeople$,
        this.pagination.endCursor
      );
    }
  }
}
