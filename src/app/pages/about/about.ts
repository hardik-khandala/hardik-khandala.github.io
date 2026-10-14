import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import {
  REAL_CERTIFICATIONS,
  SKILL_CATEGORIES,
} from '../../data/about.data';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly certifications = REAL_CERTIFICATIONS;
  readonly skillCategories = SKILL_CATEGORIES;
}
