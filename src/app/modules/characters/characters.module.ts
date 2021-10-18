import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersCellComponent } from './components/characters-cell/characters-cell.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';

const components = [
  CharactersListComponent,
  CharactersCellComponent,
  CharacterInfoComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class CharactersModule {}
