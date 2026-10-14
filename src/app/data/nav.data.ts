import { NavLink }  from '../core/models/nav-link.model';
import { Section } from '../core/enums/section.enum';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',  section: Section.Home,  icon: 'ti-home'      },
  { label: 'About', section: Section.About, icon: 'ti-user'      },
  { label: 'Work',  section: Section.Work,  icon: 'ti-briefcase' },
];