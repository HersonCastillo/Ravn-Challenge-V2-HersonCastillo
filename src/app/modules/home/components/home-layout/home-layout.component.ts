import { Component, OnInit } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { ICharacter } from 'src/app/modules/characters/interfaces/character';
import { ICharactersRequestVariables } from '../../interfaces/characters-request-variables';
import {
  ICharactersResponse,
  IPageInfo,
} from '../../interfaces/characters-response';
import { StarWarsCharactersService } from '../../services/star-wars-characters.service';

@Component({
  selector: 'sw-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  getPeople$ = this.starWarsCharacters.getCharacters().valueChanges;
  characters: ICharacter[] = [];
  pagination: IPageInfo | null = null;

  constructor(private starWarsCharacters: StarWarsCharactersService) { }

  ngOnInit(): void {
    this.getPeople$.subscribe(({ data: { allPeople, pageInfo } }) => {
      this.characters = allPeople.people;
      this.pagination = pageInfo;
    });
  }
}
