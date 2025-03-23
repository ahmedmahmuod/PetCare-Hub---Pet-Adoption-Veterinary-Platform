import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-title-container">
      <div class="title-wrapper">
        <div class="decorative-line left"></div>
        <div class="title-content">
          <h1>
            <span [ngClass]="{'title-dark': titleDark}" class="title-text">{{ title }}</span>
            <div class="shine"></div>
          </h1>
          <div class="title-underline"></div>
        </div>
        <div class="decorative-line right"></div>
      </div>
      <p *ngIf="description" class="description">
        <span [ngClass]="{'des-dark': titleDark}" class="description-text">{{ description }}</span>
      </p>
    </div>
  `,
  styles: [`
    .title-dark {
      color: var(--brand-seconed-color);
    }

    .des-dark {
      color: var(--seconed-color);
    }

    .page-title-container {
      text-align: center;
      padding: 0 20px;
      position: relative;
      overflow: hidden;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards;
      
    }

    .title-content {
      position: relative;
      padding: 0 10px;
    }

    .decorative-line {
      height: 2px;
      width: 60px;
      background: linear-gradient(90deg,
        transparent,
        var(--brand-color) 50%,
        transparent
      );
      opacity: 0;
      animation: expandLine 0.6s ease forwards 0.8s;
    }

    .decorative-line.left {
      transform-origin: right;
    }

    .decorative-line.right {
      transform-origin: left;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--brand-color);
      margin: 0;
      padding: 0;
      position: relative;
      text-transform: capitalize;
      letter-spacing: 0.5px;
      overflow: hidden;
    }

    .title-text {
      display: inline-block;
      animation: revealText 0.5s ease forwards;
    }

    .shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      animation: shine 3s infinite;
    }

    .title-underline {
      height: 4px;
      background: linear-gradient(90deg, 
        var(--brand-color) 0%,
        rgba(var(--brand-color-rgb), 0.7) 50%,
        rgba(var(--brand-color-rgb), 0.3) 100%
      );
      margin-top: 8px;
      border-radius: 2px;
      transform: scaleX(0);
      animation: expandWidth 0.6s ease forwards 0.4s;
    }

    .title-wrapper:hover .title-underline {
      animation: pulseWidth 2s ease-in-out infinite;
    }

    .description {
      font-size: 1.4rem;
      color: var(--fourth-color);
      margin-top: 16px;
      font-weight: 300;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.8s ease forwards 0.6s;
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes expandWidth {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }

    @keyframes pulseWidth {
      0%, 100% {
        transform: scaleX(1);
      }
      50% {
        transform: scaleX(0.85);
      }
    }

    @keyframes expandLine {
      from {
        opacity: 0;
        transform: scaleX(0);
      }
      to {
        opacity: 1;
        transform: scaleX(1);
      }
    }

    @keyframes revealText {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* Responsive Styles */
    @media (max-width: 1024px) {
      h1 {
        font-size: 2.2rem;
      }
      .description {
        font-size: 1.2rem;
      }
      .decorative-line {
        width: 50px;
      }
    }

    @media (max-width: 768px) {
      .page-title-container {
        margin: 30px 0;
      }
      h1 {
        font-size: 1.8rem;
      }
      .description {
        font-size: 1.1rem;
      }
      .title-underline {
        height: 3px;
      }
      .decorative-line {
        width: 40px;
      }
    }

    @media (max-width: 480px) {
      .page-title-container {
        margin: 20px 0;
      }
      h1 {
        font-size: 1.6rem;
      }
      .description {
        font-size: 1rem;
      }
      .title-underline {
        height: 2px;
      }
      .decorative-line {
        width: 30px;
      }
      .title-wrapper {
        gap: 10px;
      }
    }
  `],
})
export class PageTitleComponent {
  @Input({ required: true }) title: string = '';
  @Input() description?: string;

  @Input() titleDark?: boolean;
  @Input() desDark?: boolean;
}