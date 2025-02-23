import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesService } from '../../core/services/services/services.service';
import { ServiceModel } from '../../core/models/service/service.model';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ServicesActions from '../../stores/services-store/services.actions';
import { selectServices } from '../../stores/services-store/services.selector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Injecting
  private servicesServices = inject(ServicesService);
  private store = inject(Store);

  // Services data
  services = [
    {
      title: 'Pages.Home.Services.Card_One',
      image: 'services/veterinary1.png',
      type: 'Pet Training',
    },
    {
      title: 'Pages.Home.Services.Card_Two',
      image: 'services/veterinary2.png',
      type: 'Pet Boarding',
    },
    {
      title: 'Pages.Home.Services.Card_Three',
      image: 'services/veterinary3.png',
      type: 'Pet Grooming',
    },
    {
      title: 'Pages.Home.Services.Card_Four',
      image: 'services/veterinary4.png',
      type: 'Pet Walking',
    },
  ];


}
