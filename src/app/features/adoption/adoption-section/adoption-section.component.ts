import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionCardComponent } from './adoption-card.compontnet';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-adoption-section',
  standalone: true,
  imports: [CommonModule, AdoptionCardComponent, TranslateModule],
  template: `
    <div class="card-grid">
      <ng-container *ngFor="let item of filteredItems;">
        <app-card-adoption [item]="item"></app-card-adoption>
      </ng-container>
      <div class="more-card" (click)="onMoreClick()">
        <div class="up-card">
          <img src="logos/pets2.png" alt="pets-logo" />
          <p>{{ moreText }}</p>
        </div>
        <hr class="w-full h-1 opacity-25">
        <h3 class="font-bold text-2xl">{{ moreSubtext | translate }}</h3>
      </div>
    </div>
  `,
  styles: [
    `
      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 10px;
      }
      .more-card {
        border-radius: 18px;
        background: var(--brand-color);
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        min-height: 300px;
      }

      .up-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }

      .up-card img {
        width: 100px;
      }
    `,
  ],
})
export class AdoptionSectionComponent {
  @Input({ required: true }) items: any[] = [];
  @Input({ required: true }) moreText = 'See More';
  @Input({ required: true }) moreSubtext = 'View all items';

  // Get only the first 3 items
  get filteredItems() {
    return this.items.slice(0, 3);
  }

  // Handle "more" card click
  onMoreClick() {
    console.log('More clicked');
  }
}
