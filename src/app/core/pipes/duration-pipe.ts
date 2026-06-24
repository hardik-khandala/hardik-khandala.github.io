import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration', standalone: true, pure: true })
export class DurationPipe implements PipeTransform {

  transform(startDate: Date, endDate: Date | null): string {
    return DurationPipe.calc(startDate, endDate);
  }

  static calc(startDate: Date, endDate: Date | null): string {
    const end = endDate ?? new Date();

    let months =
      (end.getFullYear() - startDate.getFullYear()) * 12 +
      (end.getMonth()    - startDate.getMonth()) + 1;

    if (months <= 0) months = 1;

    const years = Math.floor(months / 12);
    const rem   = months % 12;

    if (years === 0) return `${rem} mo${rem !== 1 ? 's' : ''}`;
    if (rem   === 0) return `${years} yr${years !== 1 ? 's' : ''}`;
    return `${years} yr${years !== 1 ? 's' : ''} ${rem} mo${rem !== 1 ? 's' : ''}`;
  }

  static fmt(date: Date): string {
    return date.toLocaleString('en', { month: 'short', year: 'numeric' });
  }
}