import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { CharacterCellComponent } from './components/character-cell/character-cell.component';

@NgModule({
  declarations: [HomeLayoutComponent, CharacterCellComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeLayoutComponent],
})
export class HomeModule {}
