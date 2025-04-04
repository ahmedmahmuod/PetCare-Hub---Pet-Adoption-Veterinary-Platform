import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PageTitleComponent } from "../../../shared/components/page-title/pageTitle.component";
import { SheltersService } from '../../../core/services/shelters/shelters.service';
import { Observable, of } from 'rxjs';
import { ShelterModel } from '../../../core/models/shelters/shelter.model';
import { SkeletonShelterCardComponent } from "../../../shared/components/skeletons/shelter-cards/shelters-skelton.component";
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-shelters',
  standalone: true,
  imports: [CommonModule, RouterModule, PageTitleComponent, SkeletonShelterCardComponent, TranslateModule],
  template: `
  <section class="container mx-auto">
    <app-page-title [title]="('Pages.Adoption.Adoption_Cards.Card_Three' | translate)"/>

  <div *ngIf="!shelters$" class="shelters-grid container mx-auto mt-10">
    <app-skeleton-shelter-card *ngFor="let item of [1,2,3,4,5,6]"></app-skeleton-shelter-card>
  </div>

    <div class="shelters-grid container mx-auto mt-10">
        <div (click)="onShelterClick(shelter)" *ngFor="let shelter of shelters$ | async" class="shelter-card">
          <div class="card-image">
            <img [src]="shelter.shelterImage" [alt]="shelter.shelterName" class="shelter-img">
            <div class="image-overlay"></div>
            <div class="card-content">
              <h2>{{ shelter.shelterName }}</h2>
              <div class="rating-container">
                <span class="rate-number">{{ shelter.rate }}</span>
                <div class="stars" dir="ltr">
                  <span class="filled-stars" [style.width.%]="(shelter.rate / 5) * 100">★★★★★</span>
                  <span class="empty-stars">★★★★★</span>
                </div>
                <span class="reviews">({{ shelter.numberOfRates }})</span>
              </div>
              <div class="opening-hours">
                {{ shelter.description }} · {{ shelter.locations.address }}
              </div>
            </div>
          </div>
        </div>
      </div>

  </section>
  `,
  styles: [`
    .shelters-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .shelter-card {
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: all 0.3s ease;
      height: 300px;
      cursor: pointer;
    }

    .shelter-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .card-image {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .shelter-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 100%);
    }

    .card-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
      color: white;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--secoend-color);
      margin: 0 0 8px 0;
      text-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }

    .rating-container {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 12px;
    }

    .rate-number {
      font-size: 1rem;
      font-weight: 600;
      color: white;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }

    .stars {
      position: relative;
      display: inline-block;
      font-size: 14px;
    }

    .filled-stars {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      white-space: nowrap;
      color: #fbbf24;
    }

    .empty-stars {
      color: rgba(255,255,255,0.3);
    }

    .reviews {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.8);
    }

    .opening-hours {
      font-size: 0.875rem;
      color: rgba(255,255,255,0.9);
      margin-bottom: 16px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }

    .view-pets-btn {
      display: inline-block;
      background: #5d4e8c;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      transition: all 0.2s ease;
      border: none;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    .view-pets-btn:hover {
      background: #4a3d70;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    /* Responsive adjustments */
    @media (max-width: 1200px) {
      .shelters-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .shelter-card {
        height: 300px;
      }
    }

    @media (max-width: 768px) {
      .shelters-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .shelter-card {
        height: 320px;
      }
      
      .card-content {
        padding: 16px;
      }
      
      h2 {
        font-size: 1.4rem;
      }
    }

    @media (max-width: 480px) {
      .shelters-section {
        padding: 30px 0;
      }
      
      .container {
        padding: 0 15px;
      }
      
      .shelter-card {
        height: 260px;
      }
      
      h2 {
        font-size: 1.2rem;
      }
    }
  `]
})
export class SheltersListComponent implements OnInit {
  private sheltersService = inject(SheltersService)
  private router = inject(Router);

  shelters$!: Observable<ShelterModel[]>;


  ngOnInit() {
    this.sheltersService.getAllShelters().subscribe((res) => {
      this.shelters$ = of(res.allShelters)
      
    })
  }

  // On shelter click
  onShelterClick(shelter: ShelterModel) {    
    this.router.navigate(['/adoption/shelters', shelter._id]);
  }

}