import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-services-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skeleton-container">
      <div *ngFor="let item of [1, 2, 3, 4, 5, 6, 7]" class="skeleton-card">
        <div class="skeleton-image pulse"></div>
        <div class="skeleton-content">
          <div class="skeleton-title pulse"></div>
          <div class="skeleton-text pulse"></div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .skeleton-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 20px;
      }

      .skeleton-card {
        width: 300px;
        padding: 16px;
        display: flex;
        flex-direction: column;
      }

      .skeleton-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .skeleton-image {
        width: 100%;
        height: 150px;
        background: #e0e0e0;
        border-radius: 8px;
        margin-bottom: 16px;
      }

      .skeleton-title {
        width: 60%;
        height: 24px;
        background: #e0e0e0;
        border-radius: 4px;
        margin-bottom: 12px;
      }

      .skeleton-text {
        width: 80%;
        height: 16px;
        background: #e0e0e0;
        border-radius: 4px;
      }

      .pulse {
        animation: pulse 1.5s infinite;
      }

      @keyframes pulse {
        0% {
          opacity: 0.4;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.2;
        }
      }
    `,
  ],
})
export class SkeletonCardComponent {}
