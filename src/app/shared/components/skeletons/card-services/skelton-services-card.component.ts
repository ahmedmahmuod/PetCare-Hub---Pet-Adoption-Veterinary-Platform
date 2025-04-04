import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-services-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skeleton-container">
      <div *ngFor="let item of skeletonItems" class="skeleton-card">
        <div class="skeleton-content">
          <div class="skeleton-image pulse"></div>
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
        padding: 16px;
        display: flex;
        flex-direction: column;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        width: 300px;
      }

      .skeleton-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }

      .skeleton-image {
        width: 100%;
        height: 150px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 8px;
        margin-bottom: 16px;
      }

      .skeleton-title {
        width: 60%;
        height: 24px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 4px;
      }

      .skeleton-text {
        width: 80%;
        height: 16px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 4px;
      }

      .pulse {
        animation: pulse 1.5s infinite, shimmer 2s infinite;
      }

      @keyframes pulse {
        0% {
          opacity: 0.6;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.6;
        }
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      @media (max-width: 768px) {
        .skeleton-container {
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
      }

      @media (max-width: 480px) {
        .skeleton-container {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class SkeletonCardComponent {
  @Input() count: number = 12;
  skeletonItems: number[] = [];

  ngOnInit() {
    this.skeletonItems = Array(this.count).fill(0).map((x, i) => i);
  }
}