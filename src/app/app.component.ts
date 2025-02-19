import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageToggleComponent } from "./shared/components/buttons/langBtn.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LanguageToggleComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  // /Language
  currentLang: 'en' | 'ar' = 'en';
  onLanguageChange(lang: string) {
    this.currentLang = lang as 'en' | 'ar';
  }

}
