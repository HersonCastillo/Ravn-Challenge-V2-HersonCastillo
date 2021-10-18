import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sw-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button class="btn">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent { }
