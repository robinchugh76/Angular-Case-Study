import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDynamic]',
})
export class DynamicDirective {
  @Output() public deferLoad: EventEmitter<any> = new EventEmitter();

  private _intersectionObserver!: IntersectionObserver;

  constructor(private _element: ElementRef) {}

  public ngAfterViewInit() {
    this._intersectionObserver = new IntersectionObserver((entries) => {
      this.checkForIntersection(entries);
    }, {});
    this._intersectionObserver.observe(<Element>this._element.nativeElement);
  }

  private checkForIntersection = (
    entries: Array<IntersectionObserverEntry>
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.deferLoad.emit();
        this._intersectionObserver.unobserve(
          <Element>this._element.nativeElement
        );
        this._intersectionObserver.disconnect();
      }
    });
  };

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (
      (<any>entry).isIntersecting &&
      entry.target === this._element.nativeElement
    );
  }
}
