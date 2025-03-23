import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Pet {
  id: number;
  name: string;
  type: 'cat' | 'dog';
  gender: 'male' | 'female';
  weight: number;
  imageUrl: string;
}

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pet-card">
      <div class="image-container">
        <img [src]="pet.imageUrl" [alt]="pet.name">
        <div class="content-overlay">
          <div class="pet-info-overlay">
            <div class="pet-type-badge" [class.cat]="pet.type === 'cat'" [class.dog]="pet.type === 'dog'">
              {{ pet.type }}
            </div>
            <div class="pet-gender-badge">
              {{ pet.gender }}
            </div>
          </div>
          <div class="pet-details">
            <h3 class="pet-name">{{ pet.name }}</h3>
            <div class="pet-stats">
              <span class="weight">{{ pet.weight }} kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pet-card {
      position: relative;
      width: 500px;
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .pet-card:hover {
      transform: scale(1.01);
    }

    .image-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .content-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
    }

    .pet-info-overlay {
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .pet-type-badge, .pet-gender-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: capitalize;
      color: white;
    }

    .pet-type-badge {
      background-color: #ff6b6b;
    }

    .pet-type-badge.cat {
      background-color: #4dabf7;
    }

    .pet-type-badge.dog {
      background-color: #ff922b;
    }

    .pet-gender-badge {
      background-color: #845ef7;
    }

    .pet-details {
      color: white;
    }

    .pet-name {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 600;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }

    .pet-stats {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .weight {
      font-size: 1rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .pet-name {
        font-size: 1.2rem;
      }
      
      .weight {
        font-size: 0.9rem;
      }
    }
  `]
})
export class PetCardComponent {
  @Input() pet!: Pet;

}