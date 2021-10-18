import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarWarsCharactersService } from 'src/app/modules/home/services/star-wars-characters.service';
import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Input() characters: ICharacter[] = [];
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Input() canLoadMore: boolean = true;

  @Output() retrieveMoreCharacters = new EventEmitter<null>();

  selectedCharacterId: string | null = null;

  constructor(private starWarsCharacters: StarWarsCharactersService) {}

  requestMoreCharacters(): void {
    this.retrieveMoreCharacters.emit();
  }

  onCharacterSelected(character: ICharacter): void {
    this.selectedCharacterId = character.id;
    this.starWarsCharacters.setCurrentCharacter(character);
  }
}
