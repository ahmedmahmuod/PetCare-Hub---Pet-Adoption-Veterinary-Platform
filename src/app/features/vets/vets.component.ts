import { Component, inject } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { GlobalCardComponent } from "../../shared/components/global-card/global-card.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from "../../shared/components/page-title/pageTitle.component";
import { TranslateModule } from '@ngx-translate/core';
import { CardListComponent } from "../../shared/components/static-sections/more-details-section.component";

@Component({
  selector: 'app-vets',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, GlobalCardComponent, RouterLink, RouterOutlet, PageTitleComponent, TranslateModule, CardListComponent],
  templateUrl: './vets.component.html',
  styleUrl: './vets.component.css'
})
export class VetsComponent {
  private router = inject(Router);

  isOutletActive = false;


  onOutletActivated() {
    this.isOutletActive = true;
  }

  onOutletDeactivated() {
    this.isOutletActive = false;
  }

  isCardActive(route: string): boolean {
    return this.router.url === route;
  }

    // Vets cards data
    vets_cards_data = [
      {
        title: 'Doctors',
        image: 'veterinary/cards/doctors.png',
        type: 'doctors',
        rout: '/veterinary/doctors',
      },
      {
        title: 'Clinics',
        image: 'veterinary/cards/clinics.png',
        type: 'clinics',
        rout: '/veterinary/clinics',
      },
    ];

    // Providing our best veterinary Services
    providing_data = [
      {
        title: 'Pet Vaccination',
        subTitle: 'Keep your pet healthy and happy get them vaccinated!',
        image: 'veterinary/static-details-section/static-details1.png',
      },
      {
        title: 'Pet Veterinary',
        subTitle: 'Keep your pet healthy and happy with monthly checkup',
        image: 'veterinary/static-details-section/static-details2.png',
      },
      {
        title: 'Pet Surgery',
        subTitle: 'Keep your pet healthy and happy ',
        image: 'veterinary/static-details-section/static-details3.png',
      }
    ]

}
