import { DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { Section } from '../enums/section.enum';

@Injectable({
  providedIn: 'root',
})
export class SectionNavigation {
  private readonly document = inject(DOCUMENT);
  private readonly _active = signal<Section>(Section.Home);

  /** Section currently crossing the vertical center of the viewport. */
  readonly active = this._active.asReadonly();

  /**
   * Starts tracking the given sections by element id.
   * Returns a function that stops tracking.
   */
  observe(sections: readonly Section[]): () => void {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this._active.set(entry.target.id as Section);
          }
        }
      },
      // Thin band at the vertical center of the viewport.
      { rootMargin: '-45% 0px -50% 0px' },
    );

    for (const section of sections) {
      const element = this.document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }

  /** Smoothly scrolls the section with the given id to the top of its scroll container. */
  scrollTo(section: Section): void {
    const reducedMotion =
      this.document.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

    this.document.getElementById(section)?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }
}
