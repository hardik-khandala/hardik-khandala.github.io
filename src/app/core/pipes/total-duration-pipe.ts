import { Pipe, PipeTransform } from '@angular/core';
import { Role }                from '../models/experience.model';
import { DurationPipe } from './duration-pipe';


@Pipe({ name: 'totalDuration', standalone: true, pure: true })
export class TotalDurationPipe implements PipeTransform {

  transform(roles: Role[]): string {
    if (!roles.length) return '';

    const starts  = roles.map(r => r.startDate.getTime());
    const ends    = roles.map(r => (r.endDate ?? new Date()).getTime());

    const earliest = new Date(Math.min(...starts));
    const latest   = new Date(Math.max(...ends));

    return DurationPipe.calc(earliest, latest);
  }

}