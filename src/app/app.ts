import { Component, signal } from '@angular/core';
import { Navbar } from "./core/components/navbar/navbar";
import { CustomCursor } from "./core/components/cursor/cursor";
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Workspace } from './pages/workspace/workspace';

@Component({
  selector: 'app-root',
  imports: [Navbar, CustomCursor, Home, About, Workspace],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myPortfolio');
}
