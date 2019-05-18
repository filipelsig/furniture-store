import {Directive, Input, ElementRef, HostListener, OnDestroy} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lazySrc]'
})
export class LazySrcDirective implements OnDestroy {
  @Input('lazySrc') source: string;

  private io: IntersectionObserver;

  constructor(private el: ElementRef<HTMLImageElement>) {
    const options: IntersectionObserverInit = {
      rootMargin: '128px'
    };

    this.io = new IntersectionObserver((entries, observer) => {
      const loadImage = entries.filter(entry => entry.isIntersecting).length > 0;
      if (loadImage) {
        console.log('Loading image...');
        this.el.nativeElement.src = this.source;
        this.el.nativeElement.classList.remove('image-loading');

        this.io.disconnect();
      }
    }, options);
    this.io.observe(el.nativeElement);
    this.el.nativeElement.src = 'assets/images/lazy-load-placeholder.png';
    this.el.nativeElement.classList.add('image-loading');
  }

  ngOnDestroy(): void {
    this.io.disconnect();
  }
}
