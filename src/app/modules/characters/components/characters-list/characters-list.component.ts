import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Output() retrieveMoreCharacters = new EventEmitter<null>();

  @Input() characters: ICharacter[] = [];
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Input() canLoadMore: boolean = true;

  requestMoreCharacters(): void {
    this.retrieveMoreCharacters.emit();
  }
}
