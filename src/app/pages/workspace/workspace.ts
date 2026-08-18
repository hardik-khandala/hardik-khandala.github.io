import { Component, signal } from '@angular/core';
import { EXPERIENCE_DATA } from '../../data/experience.data';
import { DurationPipe } from '../../core/pipes/duration-pipe';
import { TotalDurationPipe } from '../../core/pipes/total-duration-pipe';
import { FmtDatePipe } from '../../core/pipes/fmt-pipe-pipe';
import { PROJECT_DATA } from '../../data/project.data';
import { Project } from '../../core/models/project.model';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-workspace',
  imports: [DurationPipe, TotalDurationPipe, FmtDatePipe, ScrollRevealDirective],
  templateUrl: './workspace.html',
  styleUrl: './workspace.css',
})
export class Workspace {
  readonly experiences = EXPERIENCE_DATA;
  readonly projects    = PROJECT_DATA;
  selectedProject        = signal<Project | null>(null);

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).id === 'modal-backdrop') {
      this.closeProject();
    }
  }

}
