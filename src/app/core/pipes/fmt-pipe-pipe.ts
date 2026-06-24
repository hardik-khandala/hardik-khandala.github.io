import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fmtDate', standalone: true, pure: true })
export class FmtDatePipe implements PipeTransform {
  transform(date: Date | null): string {
    if (!date) return 'Present';
    return date.toLocaleString('en', { month: 'short', year: 'numeric' });
  }
}