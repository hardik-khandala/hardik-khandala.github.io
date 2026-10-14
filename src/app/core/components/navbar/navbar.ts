import { afterNextRender, Component, DestroyRef, inject } from '@angular/core';
import { NAV_LINKS } from '../../../data/nav.data';
import { SectionNavigation } from '../../services/section-navigation';
import { Section } from '../../enums/section.enum';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly sectionNavigation = inject(SectionNavigation);
  private readonly destroyRef = inject(DestroyRef);

  readonly navLinks = NAV_LINKS;
  readonly homeSection = Section.Home;
  readonly activeSection = this.sectionNavigation.active;

  constructor() {
    afterNextRender(() => {
      const stopObserving = this.sectionNavigation.observe(
        this.navLinks.map(link => link.section),
      );
      this.destroyRef.onDestroy(stopObserving);
    });
  }

  /** Prevents the default anchor jump and scrolls to the section smoothly. */
  scrollTo(section: Section, event: Event): void {
    event.preventDefault();
    this.sectionNavigation.scrollTo(section);
  }
}
