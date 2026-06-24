import { Pipe, PipeTransform } from '@angular/core';
import { Role }                from '../models/experience.model';
import { DurationPipe } from './duration-pipe';


@Pipe({ name: 'totalDuration', standalone: true, pure: true })
export class TotalDurationPipe implements PipeTransform {

  transform(roles: Role[]): string {
    if (!roles.length) return '';

    const starts = roles.map(r => DurationPipe.parseStart(r.startDate).getTime());
    const ends   = roles.map(r =>
      r.endDate ? DurationPipe.parseEnd(r.endDate).getTime() : new Date().getTime()
    );

    const earliest = new Date(Math.min(...starts));
    const latest   = new Date(Math.max(...ends));

    const fmt = (d: Date) =>
      `${d.toLocaleString('en', { month: 'short' })} ${d.getFullYear()}`;

    return DurationPipe.calc(fmt(earliest), fmt(latest));
  }
}