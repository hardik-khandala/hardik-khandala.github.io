import { Component } from '@angular/core';
import { NavRoute } from '../../enums/nav-route.enum';
import { NAV_LINKS } from '../../../data/nav.data';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly navLinks = NAV_LINKS;
  readonly homeRoute = NavRoute.Home;
}
