import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-title-container">
      <h1>{{ title }}</h1>
      <p *ngIf="description">{{ description }}</p>
    </div>
  `,
  styles: [
    `
      .page-title-container {
        text-align: center;
        margin: 30px 0;
      }

      h1 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--brand-color);
      }
      p {
        font-size: 1.4rem;
        color: var(--fourth-color);
      }
    `,
  ],
})
export class PageTitleComponent {
  @Input({ required: true }) title: string = '';
  @Input() description?: string;
}
