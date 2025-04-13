import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { HeroSectionComponent } from "../../../shared/components/hero-section/hero-section.component";
import { FormsModule } from '@angular/forms';
import { filter, map, Observable, of, take, tap } from 'rxjs';
import { ServiceModel } from '../../../core/models/service/service.model';
import { ServicesCardComponent } from "../../../shared/components/services-cards/servicesCard.component";
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SkeletonCardComponent } from "../../../shared/components/skeletons/card-services/skelton-services-card.component";
import { ServicesService } from '../../../core/services/services/services.service';

@Component({
  selector: 'app-all-services',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    SkeletonModule,
    HeroSectionComponent,
    FormsModule,
    ServicesCardComponent,
    PaginationComponent,
    SkeletonCardComponent
  ],
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.css',
})

export class AllServicesComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private serviceServices = inject(ServicesService);

  services$: Observable<ServiceModel[]> = of([]);
  filteredServices$: Observable<ServiceModel[]> = of([]);
  isLoading$: Observable<boolean> = of(false);

  currentPage = signal(1);
  pageSize = 12;
  totalItems = signal(0);
  totalItems$ = toObservable(this.totalItems);
  hasNoResults = signal(false);

  selectedService = '';
  location = '';
  locations: string[] = [];
  allServicesType: string[] = [];

  formServiceType = '';
  formCity = '';

  ngOnInit(): void {
    this.initServices();
    this.checkRouteParams();
  }

  constructor() {

  }

  private initServices(): void {
    this.isLoading$ = of(true);
    this.serviceServices.getAllServices().pipe(map((services) => services.filter((s) => s.serviceImage))).subscribe({
      next: (services) => {
        // this.services$ = of(services);
        this.services$ = of(services);
        
        this.filteredServices$ = of(services);
        this.totalItems.set(services.length);
        this.extractFilterOptions(services);
        this.applyFiltersFromSelection();
        this.isLoading$ = of(false);
      },
      error: (err) => {
        console.error('Failed to load services:', err);
        this.isLoading$ = of(false);
      }
    });
  }

  private checkRouteParams(): void {
    this.route.queryParams.pipe(
      take(1),
      tap(params => {
        this.selectedService = params['serviceType'] || '';
        this.location = params['city'] || '';
        
        this.formServiceType = this.selectedService;
        this.formCity = this.location;
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  private extractFilterOptions(services: ServiceModel[]): void {
    this.allServicesType = Array.from(new Set(services.map(service => service.serviceType)));
    this.locations = Array.from(new Set(services.map(service => service.city)));
  }

  private applyFiltersFromSelection(): void {
    if (this.selectedService || this.location) {
      this.applyFilters(false);
    }
  }

  applyFilters(updateUrl = true): void {
    const serviceType = this.selectedService?.trim();
    const city = this.location?.trim();
    this.isLoading$ = of(true);

    this.services$.pipe(
      take(1),
      map(services => {
        return services.filter(service => {
          const matchType = serviceType ? service.serviceType.toLowerCase().includes(serviceType.toLowerCase()) : true;
          const matchCity = city ? service.city.toLowerCase().includes(city.toLowerCase()) : true;
          return matchType && matchCity;
        });
      }),
      tap(filteredServices => {
        this.filteredServices$ = of(filteredServices);
        this.totalItems.set(filteredServices.length);
        this.hasNoResults.set(filteredServices.length === 0);

        const maxPage = Math.ceil(filteredServices.length / this.pageSize);
        if (this.currentPage() > maxPage && maxPage > 0) {
          this.currentPage.set(maxPage);
        } else if (filteredServices.length === 0) {
          this.currentPage.set(1);
        }

        if (updateUrl) {
          this.updateUrlWithFilters();
        }
      }),
      tap(() => this.isLoading$ = of(false))
    ).subscribe();
  }

  private updateUrlWithFilters(): void {
    const queryParams: any = {};
    if (this.selectedService) queryParams.serviceType = this.selectedService;
    if (this.location) queryParams.city = this.location;

    const currentScroll = window.scrollY;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: '',
      replaceUrl: true,
      skipLocationChange: false
    }).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: currentScroll, behavior: 'auto' });
      }, 0);
    });
  }
  

  resetFilters(): void {
    this.selectedService = '';
    this.location = '';
    this.formServiceType = '';
    this.formCity = '';
    this.currentPage.set(1);
    this.filteredServices$ = this.services$;
    this.services$.pipe(
      take(1),
      tap(services => {
        this.totalItems.set(services.length);
        this.hasNoResults.set(false);
      })
    ).subscribe();
    this.updateUrlWithFilters();
  }

  onSearch(event: any): void {
    this.selectedService = event.service;
    this.location = event.location;
    this.currentPage.set(1);
    this.applyFilters();
  }

  getPaginatedServices(): Observable<ServiceModel[]> {
    return this.filteredServices$.pipe(
      map(services => {
        const start = (this.currentPage() - 1) * this.pageSize;
        const end = start + this.pageSize;
        return services.slice(start, end);
      })
    );
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
  }
}