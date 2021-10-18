import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-character-trait',
  templateUrl: './character-trait.component.html',
  styleUrls: ['./character-trait.component.scss']
})
export class CharacterTraitComponent {
  @Input() label!: string;
  @Input() value!: string;
}
