import { Component, Input } from '@angular/core';
import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Input() characters: ICharacter[] = [];
}
