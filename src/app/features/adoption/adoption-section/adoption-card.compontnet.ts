import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteIconComponent } from "../../../shared/components/buttons/fav-btn.component";

export interface CardAdoptionItem {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
}

@Component({
  selector: 'app-card-adoption',
  standalone: true,
  imports: [CommonModule, FavoriteIconComponent],
  template: `
    <div class="card relative">
    <app-favorite-icon [isActive]="isFavorite" (favoriteChange)="onFavoriteChange($event)"/>
      <img [src]="item.image" [alt]="item.name" class="card-image">
      <div class="card-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.type }}</p>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      background: white;
    }
    .card-image {
      width: 100%;
      object-fit: cover;
    }
    .card-content {
      padding: 16px;
      
    }
    h3 {
      margin: 0;
      font-size: 18px;
      color: var(--brand-color);
      font-weight: bold;
    }
    p {
      margin: 8px 0 0;
      color: var(--fourth-color);
    }
  `]
})
export class AdoptionCardComponent { 
  @Input() item!: any;

  isFavorite = false;

  onFavoriteChange(value: boolean) {
    this.isFavorite = value;
  }
}