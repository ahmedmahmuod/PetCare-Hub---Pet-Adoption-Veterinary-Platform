import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('slideAnimation', [
      state('void', style({
          transform: 'translateX(100%)',
          opacity: 0,
      })),
      state('*', style({
          transform: 'translateX(0)',
          opacity: 1,
      })),
      transition('void => *', [animate('400ms ease-out')]),
      transition('* => void', [animate('200ms ease-in')]),
  ]),]
})
export class HeaderComponent {
  isMenuOpen = false;
  isLoggedIn = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
