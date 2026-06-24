import { NavLink }  from '../core/models/nav-link.model';
import { NavRoute } from '../core/enums/nav-route.enum';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',  route: NavRoute.Home,  icon: 'ti-home'      },
  { label: 'About', route: NavRoute.About, icon: 'ti-user'      },
  { label: 'Work',  route: NavRoute.Work,  icon: 'ti-briefcase' },
];