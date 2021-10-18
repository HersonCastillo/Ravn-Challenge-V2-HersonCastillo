import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[swScrollControl]',
})
export class ScrollControlDirective {
  @Output() triggerRequest = new EventEmitter<null>();

  @HostListener('scroll', ['$event.target'])
  onScroll({ offsetHeight, scrollTop, scrollHeight }: HTMLDivElement): void {
    const accumulative = offsetHeight + scrollTop;
    if (accumulative >= scrollHeight - 1) {
      this.triggerRequest.emit();
    }
  }
}
