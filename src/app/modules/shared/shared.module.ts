import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    LoadingBarComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
