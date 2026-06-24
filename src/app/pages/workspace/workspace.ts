import { Component } from '@angular/core';
import { EXPERIENCE_DATA } from '../../data/experience.data';
import { DurationPipe } from '../../core/pipes/duration-pipe';
import { TotalDurationPipe } from '../../core/pipes/total-duration-pipe';

@Component({
  selector: 'app-workspace',
  imports: [DurationPipe, TotalDurationPipe],
  templateUrl: './workspace.html',
  styleUrl: './workspace.css',
})
export class Workspace {
  readonly experiences = EXPERIENCE_DATA;
}
