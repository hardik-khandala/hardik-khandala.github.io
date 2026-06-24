import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration', standalone: true, pure: true })
export class DurationPipe implements PipeTransform {

  transform(startStr: string, endStr: string | null): string {
    return DurationPipe.calc(startStr, endStr);
  }

  static calc(startStr: string, endStr: string | null): string {
    const start = DurationPipe.parseStart(startStr);
    const end   = endStr ? DurationPipe.parseEnd(endStr) : new Date();

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth()    - start.getMonth()) + 1;

    if (months <= 0) months = 1;

    const years = Math.floor(months / 12);
    const rem   = months % 12;

    if (years === 0) return `${rem} mo${rem !== 1 ? 's' : ''}`;
    if (rem   === 0) return `${years} yr${years !== 1 ? 's' : ''}`;
    return `${years} yr${years !== 1 ? 's' : ''} ${rem} mo${rem !== 1 ? 's' : ''}`;
  }

  static parseStart(dateStr: string): Date {
    const [month, year] = dateStr.split(' ');
    return new Date(`${month} 1, ${year}`);
  }

  static parseEnd(dateStr: string): Date {
    const [month, year] = dateStr.split(' ');
    // last day of the end month
    return new Date(Number(year), new Date(`${month} 1, ${year}`).getMonth() + 1, 0);
  }
}