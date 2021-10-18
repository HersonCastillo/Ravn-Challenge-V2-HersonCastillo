import { Component, Input } from '@angular/core';
import { StarWarsCharactersService } from 'src/app/modules/home/services/star-wars-characters.service';
import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'sw-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
})
export class CharacterInfoComponent {
  character$ = this.starWarsCharacters.currentCharacter$;

  constructor(
    private starWarsCharacters: StarWarsCharactersService,
  ) { }
}
