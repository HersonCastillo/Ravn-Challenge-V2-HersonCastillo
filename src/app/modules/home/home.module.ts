import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { GridLayoutSeparationComponent } from './components/grid-layout-separation/grid-layout-separation.component';
import { CharactersModule } from '../characters/characters.module';

const components = [
  HomeLayoutComponent,
  GridLayoutSeparationComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, CharactersModule, SharedModule],
  exports: [HomeLayoutComponent],
})
export class HomeModule {}
