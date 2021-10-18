import { Component } from '@angular/core';

@Component({
  selector: 'sw-warning',
  styleUrls: ['./warning.component.scss'],
  template: `
    <p class="warning-message">
      <ng-content></ng-content>
    </p>
  `,
})
export class WarningComponent { }
