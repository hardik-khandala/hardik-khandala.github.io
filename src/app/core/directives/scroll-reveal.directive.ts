import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type RevealDirection = 'left' | 'right' | 'up' | 'zoom';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly appScrollReveal = input<RevealDirection>('up');
  readonly revealDelay = input<number>(0);
  readonly revealDuration = input<number>(650);
  readonly revealThreshold = input<number>(0.12);
  readonly revealOnce = input<boolean>(true);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const nativeEl = this.el.nativeElement as HTMLElement;
    const direction = this.appScrollReveal() || 'up';
    const delay = this.revealDelay() || 0;
    const duration = this.revealDuration() || 650;

    nativeEl.classList.add('reveal-init', `reveal-${direction}`);
    nativeEl.style.transitionDuration = `${duration}ms`;
    nativeEl.style.transitionDelay = `${delay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nativeEl.classList.add('is-revealed');
            if (this.revealOnce()) {
              this.observer?.unobserve(nativeEl);
              this.observer?.disconnect();
            }
          } else if (!this.revealOnce()) {
            nativeEl.classList.remove('is-revealed');
          }
        });
      },
      {
        threshold: this.revealThreshold(),
        rootMargin: '0px 0px -40px 0px',
      }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
