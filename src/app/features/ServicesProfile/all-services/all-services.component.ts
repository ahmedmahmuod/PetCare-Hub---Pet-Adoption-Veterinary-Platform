import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageTitleComponent } from '../../../shared/components/page-title/pageTitle.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ServicesCartComponent } from '../../../shared/components/services-cards/servicesCard.component';
import { SkeletonModule } from 'primeng/skeleton';
import { SkeletonCardComponent } from './../../../shared/components/skeletons/card-services/skelton-services-card.component';

@Component({
  selector: 'app-all-services',
  standalone: true,
  imports: [
    PageTitleComponent,
    TranslateModule,
    CommonModule,
    ServicesCartComponent,
    SkeletonModule,
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.css',
})
export class AllServicesComponent {}
