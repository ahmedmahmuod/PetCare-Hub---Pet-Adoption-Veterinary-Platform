import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="team-member">
      <div class="image-container">
        <img [src]="imageUrl" [alt]="name" class="member-image">
      </div>
      <h3 class="member-name">{{ name }}</h3>
      <p class="member-role">{{ role }}</p>
    </div>
  `,
  styles: [`
    .team-member {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      text-align: center;
      width: 100%;
      max-width: 250px;
      margin: 1rem;
    }

    .image-container {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 2px dashed #ccc;
      padding: 8px;
      margin-bottom: 1rem;
    }

    .member-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .member-name {
      color: #333;
      font-size: 1.25rem;
      margin: 0.5rem 0;
      font-weight: 600;
    }

    .member-role {
      color: #666;
      margin: 0;
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      .image-container {
        width: 150px;
        height: 150px;
      }

      .member-name {
        font-size: 1.1rem;
      }

      .member-role {
        font-size: 0.9rem;
      }
    }
  `]
})
export class TeamMemberCardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
}