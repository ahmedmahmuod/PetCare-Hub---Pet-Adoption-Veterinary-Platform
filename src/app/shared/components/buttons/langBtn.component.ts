import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [dir]="currentLang === 'en' ? 'ltr' : 'rtl'" class="language-toggle">
      <button
        (click)="toggleLanguage()"
        class="toggle-btn"
        [class.ar]="currentLang === 'ar'"
        [class.en]="currentLang === 'en'"
      >
        <span class="toggle-circle">
          <span class="lang-icon">{{ currentLang === 'ar' ? 'ع' : 'En' }}</span>
        </span>
        <span class="lang-text">{{
          currentLang === 'ar' ? 'English' : 'عربي'
        }}</span>
      </button>
    </div>
  `,
  styles: [
    `
      .language-toggle {
        position: fixed;
        right: -62px;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        z-index: 1000;
      }
      .language-toggle:hover {
        right: -5px;
      }
      .toggle-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--brand-color);
        border: 1.5px solid #e2e8f0;
        padding: 10px;
        /* border-radius: 20px; */
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        min-width: 90px;
        box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.1);
        font-family: var(--font-family);
      }
      .toggle-btn:hover {
        box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
      }
      .toggle-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: var(--brand-seconed-color);
        border-radius: 50%;
        color: var(--brand-color);
        font-weight: 600;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: var(--font-family);
      }
      .lang-icon {
        font-size: 16px;
        font-weight: 600;
        font-family: var(--font-family);
      }
      .lang-text {
        font-weight: 500;
        color: var(--brand-seconed-color);
        transition: all 0.3s ease;
      }
      .toggle-btn.ar {
        flex-direction: row-reverse;
      }
      .toggle-btn.ar .toggle-circle {
        background: var(--brand-seconed-color);
      }
      .toggle-btn:active .toggle-circle {
        transform: scale(0.95);
      }
      .toggle-btn:hover .toggle-circle {
        box-shadow: 0 0 8px rgba(37, 99, 235, 0.3);
      }
      .toggle-btn.ar:hover .toggle-circle {
        box-shadow: 0 0 8px rgba(5, 150, 105, 0.3);
      }
    `,
  ],
})
export class LanguageToggleComponent {
  @Output() languageChange = new EventEmitter<string>();
  currentLang: 'en' | 'ar' = 'en';

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.languageChange.emit(this.currentLang);

    console.log(this.currentLang);
    
  }
}
