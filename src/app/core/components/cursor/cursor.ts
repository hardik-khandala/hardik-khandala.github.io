import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: './cursor.html',
  styleUrl: './cursor.css',
})
export class CustomCursor implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);

  readonly cursorDot = viewChild<ElementRef<HTMLDivElement>>('cursorDot');
  readonly cursorRing = viewChild<ElementRef<HTMLDivElement>>('cursorRing');
  readonly spotlight = viewChild<ElementRef<HTMLDivElement>>('spotlight');

  private mouseX = -500;
  private mouseY = -500;
  private ringX = -500;
  private ringY = -500;
  private isVisible = false;
  private isHovered = false;
  private isClicked = false;
  private animFrameId: number | null = null;

  private onMouseMoveBound = this.onMouseMove.bind(this);
  private onMouseDownBound = this.onMouseDown.bind(this);
  private onMouseUpBound = this.onMouseUp.bind(this);
  private onMouseLeaveBound = this.onMouseLeave.bind(this);
  private onMouseEnterBound = this.onMouseEnter.bind(this);
  private onMouseOverBound = this.onMouseOver.bind(this);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Check if device supports fine hover (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('mousemove', this.onMouseMoveBound, { passive: true });
      window.addEventListener('mousedown', this.onMouseDownBound, { passive: true });
      window.addEventListener('mouseup', this.onMouseUpBound, { passive: true });
      document.addEventListener('mouseleave', this.onMouseLeaveBound, { passive: true });
      document.addEventListener('mouseenter', this.onMouseEnterBound, { passive: true });
      document.addEventListener('mouseover', this.onMouseOverBound, { passive: true });

      this.renderLoop();
    });
  }

  private onMouseMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    if (!this.isVisible) {
      this.isVisible = true;
      this.ringX = this.mouseX;
      this.ringY = this.mouseY;
    }
  }

  private onMouseDown(): void {
    this.isClicked = true;
  }

  private onMouseUp(): void {
    this.isClicked = false;
  }

  private onMouseLeave(): void {
    this.isVisible = false;
  }

  private onMouseEnter(): void {
    this.isVisible = true;
  }

  private onMouseOver(e: MouseEvent): void {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    const interactive = target.closest(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer, [routerLink], .nav-tab-item'
    );
    this.isHovered = !!interactive;
  }

  private renderLoop(): void {
    // Lerp smooth follow for trailing ring
    const ease = 0.18;
    this.ringX += (this.mouseX - this.ringX) * ease;
    this.ringY += (this.mouseY - this.ringY) * ease;

    const dot = this.cursorDot()?.nativeElement;
    const ring = this.cursorRing()?.nativeElement;
    const spot = this.spotlight()?.nativeElement;

    if (dot && ring) {
      if (!this.isVisible) {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
      } else {
        dot.style.opacity = '1';
        ring.style.opacity = '1';

        dot.style.transform = `translate3d(${this.mouseX}px, ${this.mouseY}px, 0) translate(-50%, -50%)`;
        
        let scale = 1;
        if (this.isClicked) {
          scale = 0.8;
        } else if (this.isHovered) {
          scale = 1.8;
        }

        ring.style.transform = `translate3d(${this.ringX}px, ${this.ringY}px, 0) translate(-50%, -50%) scale(${scale})`;

        if (this.isHovered) {
          ring.classList.add('cursor-hover');
          dot.classList.add('dot-hover');
        } else {
          ring.classList.remove('cursor-hover');
          dot.classList.remove('dot-hover');
        }
      }
    }

    if (spot && this.isVisible) {
      spot.style.background = `radial-gradient(750px circle at ${this.mouseX}px ${this.mouseY}px, rgba(0, 245, 184, 0.075) 0%, rgba(168, 85, 247, 0.035) 40%, transparent 75%)`;
    }

    this.animFrameId = requestAnimationFrame(this.renderLoop.bind(this));
  }

  ngOnDestroy(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('mousemove', this.onMouseMoveBound);
      window.removeEventListener('mousedown', this.onMouseDownBound);
      window.removeEventListener('mouseup', this.onMouseUpBound);
      document.removeEventListener('mouseleave', this.onMouseLeaveBound);
      document.removeEventListener('mouseenter', this.onMouseEnterBound);
      document.removeEventListener('mouseover', this.onMouseOverBound);
    }
  }
}
