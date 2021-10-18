import { Component, Input } from '@angular/core';
import { ICharacter } from '../../interfaces/character';

@Component({
  selector: 'sw-characters-cell',
  templateUrl: './characters-cell.component.html',
  styleUrls: ['./characters-cell.component.scss'],
})
export class CharactersCellComponent {
  @Input() character: ICharacter | null = null;
}
