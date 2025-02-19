import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
  @Output() languageChange = new EventEmitter<string>();

  isMenuOpen = false;
  isLoggedIn = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
