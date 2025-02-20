import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ServicesService } from '../../core/services/services/services.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {
  // Injecting 
  private servicesServices = inject(ServicesService)

  // Services data
  services = [
    { title: 'Pages.Home.Services.Card_One', image: 'services/veterinary1.png', type: 'Pet Training' },
    { title: 'Pages.Home.Services.Card_Two', image: 'services/veterinary2.png', type: 'Pet Boarding' },
    { title: 'Pages.Home.Services.Card_Three', image: 'services/veterinary3.png', type: 'Pet Grooming' },
    { title: 'Pages.Home.Services.Card_Four', image: 'services/veterinary4.png', type: 'Pet Walking' },
    { title: 'Pages.Home.Services.Card_Five', image: 'logos/pets.png' },
  ];

  // On click of service card in home page 
  onService(service: any) {    

    // Get the service details from the service type
    this.servicesServices.getServiceDetails(service.type).subscribe((data: any) => {
      console.log(data);
    })
  }
}
