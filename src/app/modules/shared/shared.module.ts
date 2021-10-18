import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { WarningComponent } from './components/warning/warning.component';

const components = [
  NavBarComponent,
  LoadingBarComponent,
  ButtonComponent,
  WarningComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
