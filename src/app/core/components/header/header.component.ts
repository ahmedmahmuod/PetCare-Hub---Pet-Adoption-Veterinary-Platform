import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, RouterLinkActive],
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
export class HeaderComponent implements OnInit{
  private languageService = inject(LanguageService);
  
  currentLang: string = 'en';
  isMenuOpen = false;
  isLoggedIn = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
}
