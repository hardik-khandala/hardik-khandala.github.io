import { Routes } from '@angular/router';
import { NavRoute } from './core/enums/nav-route.enum';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: NavRoute.About.slice(1),
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
  },
  {
    path: NavRoute.Work.slice(1),
    loadComponent: () =>
      import('./pages/workspace/workspace').then(
        m => m.Workspace
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];