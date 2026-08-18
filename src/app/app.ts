import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/components/navbar/navbar";
import { CustomCursor } from "./core/components/cursor/cursor";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CustomCursor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myPortfolio');
}
