import { Component } from '@angular/core';

@Component({
  selector: 'sw-loading-bar',
  styleUrls: ['./loading-bar.component.scss'],
  template: `
    <div class="loading-bar__container">
      <div class="loading-bar">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Loading</span>
    </div>
  `,
})
export class LoadingBarComponent {}
