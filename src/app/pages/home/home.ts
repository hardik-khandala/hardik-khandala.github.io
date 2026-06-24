import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { HERO_DATA } from '../../data/hero.data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  readonly hero = HERO_DATA;

  currentRoleIndex = signal(0);
  displayedText    = signal('');
  isDeleting       = signal(false);

  private typingSpeed   = 100;
  private deletingSpeed = 50;
  private pauseDelay    = 1800;
  private timerId!:     ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }

  private type(): void {
    const role    = this.hero.roles[this.currentRoleIndex()];
    const current = this.displayedText();

    if (!this.isDeleting() && current.length < role.length) {
      this.displayedText.set(role.slice(0, current.length + 1));
      this.timerId = setTimeout(() => this.type(), this.typingSpeed);
      return;
    }

    if (!this.isDeleting() && current.length === role.length) {
      this.timerId = setTimeout(() => {
        this.isDeleting.set(true);
        this.type();
      }, this.pauseDelay);
      return;
    }

    if (this.isDeleting() && current.length > 0) {
      this.displayedText.set(role.slice(0, current.length - 1));
      this.timerId = setTimeout(() => this.type(), this.deletingSpeed);
      return;
    }

    if (this.isDeleting() && current.length === 0) {
      this.isDeleting.set(false);
      this.currentRoleIndex.set(
        (this.currentRoleIndex() + 1) % this.hero.roles.length
      );
      this.timerId = setTimeout(() => this.type(), this.typingSpeed);
    }
  }
}