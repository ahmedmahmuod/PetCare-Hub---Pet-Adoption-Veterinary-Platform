import { LanguageService } from './core/services/language/language.service';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageToggleComponent } from "./shared/components/buttons/langBtn.component";
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [LanguageToggleComponent, HeaderComponent, FooterComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private languageService = inject(LanguageService);
  
  currentLang: string = 'en';
  dir: 'ltr' | 'rtl' = 'ltr';

  constructor(private translate: TranslateService, private router: Router) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
      this.translate.use(lang);
      this.dir = lang === 'ar' ? 'rtl' : 'ltr';
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }
}
