import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersCellComponent } from './components/characters-cell/characters-cell.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { ScrollControlDirective } from './directives/scroll-control.directive';
import { SharedModule } from '../shared/shared.module';

const components = [
  CharactersListComponent,
  CharactersCellComponent,
  CharacterInfoComponent,
];

@NgModule({
  declarations: [
    ...components,
    ScrollControlDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [...components],
})
export class CharactersModule {}
