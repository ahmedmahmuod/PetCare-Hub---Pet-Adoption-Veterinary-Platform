import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ServicesActions from '../../../stores/services-store/services.actions';
import { selectServices, selectServicesLoading } from '../../../stores/services-store/services.selector';
import { Observable } from 'rxjs';
import { ServiceModel } from '../../../core/models/service/service.model';
import { SkeletonCardComponent } from "../skeletons/card-services/skelton-services-card.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule, SkeletonCardComponent],
  template: `
      <div (click)="onServiceClick(service)" *ngFor="let service of services | async" 
           class="flex items-center justify-center flex-col bg-third-color cursor-pointer rounded-3xl p-5 border-2 border-fourth-color transition-all ease-in-out w-72 hover:-translate-y-1 hover:bg-brand-color group">
        <img class="max-w-40 object-contain mb-3" [src]="service.icon" [alt]="service.name"/>
        <hr class="w-full border-1 border-fourth-color mb-4 opacity-25" />
        <h3 class="text-lg text-brand-color font-bold group-hover:text-brand-seconed-color transition-all">
          {{ service.name }}
        </h3>
        <p class="text-sm text-center text-fourth-color group-hover:text-seconed-color transition-all">
          {{ service.description }}
        </p>
      </div>
      <app-skeleton-services-card *ngIf="isLoading | async"/>

  `,
})
export class ServicesCartComponent {
  services!: Observable<any>;
  isLoading!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {

    // Select the services from the store
    this.store.dispatch(ServicesActions.loadServices());
    this.services = this.store.select(selectServices);

    // Select the loading state from the store
    this.isLoading = this.store.select(selectServicesLoading);

  }

  // On service click
  onServiceClick(service: ServiceModel) {
    console.log(service._id);
    const formattedName = service.name.replace(/\s+/g, '_'); 
    this.router.navigate(['/services', formattedName]);
  }
}