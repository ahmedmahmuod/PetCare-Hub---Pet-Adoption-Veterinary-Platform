import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { GlobalCardComponent } from '../../shared/components/global-card/global-card.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PageTitleComponent } from "../../shared/components/page-title/pageTitle.component";
import { AdoptionSectionComponent } from "./adoption-section/adoption-section.component";
import { SliderComponent } from "../../shared/components/slider/slicder.component";
import { Pet, PetCardComponent } from "./pet-card/pet-card.component";
import { AllBlogsComponent } from "../blogs/all-blogs/all-blogs.component";
import { CustomButtonComponent } from "../../shared/components/buttons/global-btn.component";

@Component({
  selector: 'app-adoption',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeroSectionComponent,
    GlobalCardComponent,
    RouterOutlet,
    RouterLink,
    PageTitleComponent,
    AdoptionSectionComponent,
    SliderComponent,
    AllBlogsComponent,
    PetCardComponent,
    CustomButtonComponent
],
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css'],
})
export class AdoptionComponent {
  private router = inject(Router);

  // Adoption cards data
  adoptions_data = [
    {
      title: 'Pages.Adoption.Adoption_Cards.Card_One',
      image: 'adoption/cards/cat.png',
      type: 'dogs',
      rout: '/adoption/dogs',
    },
    {
      title: 'Pages.Adoption.Adoption_Cards.Card_Two',
      image: 'adoption/cards/dog.png',
      type: 'cats',
      rout: '/adoption/cats',
    },
    {
      title: 'Pages.Adoption.Adoption_Cards.Card_Three',
      image: 'adoption/cards/shelters.png',
      type: 'shelters',
      rout: '/adoption/shelters',
    },
  ];


  isCardActive(route: string): boolean {
    return this.router.url === route;
  }



  adoptions = [
    {
      title: 'Poncho',
      image: 'adoption/adop1.png',
      type: 'Terrier Mix',
    },
    {
      title: 'Biscuit',
      image: 'adoption/adop2.png',
      type: 'Labrador Retriever',
    },
    {
      title: 'Tanzi',
      image: 'adoption/adop3.png',
      type: 'Abyssinian',
    },
  ];

  // Planning to Adopt
  planning = [
    {
      title: 'Pages.Adoption.Planning_to_Adopt.Cards.Card_One.Title',
      subTitle: 'Pages.Adoption.Planning_to_Adopt.Cards.Card_One.Subtitle',
      image: 'adoption/planning/plan1.png',
    },
    {
      title: 'Pages.Adoption.Planning_to_Adopt.Cards.Card_Two.Title',
      subTitle: 'Pages.Adoption.Planning_to_Adopt.Cards.Card_Two.Subtitle',
      image: 'adoption/planning/plan2.png',
    },
    {
      title: 'Pages.Adoption.Planning_to_Adopt.Cards.Card_Three.Title',
      subTitle: 'Pages.Adoption.Planning_to_Adopt.Cards.Card_Three.Subtitle',
      image: 'adoption/planning/plan3.png',
    }
  ]

  pets: Pet[] = [
    {
      id: 2,
      name: 'Max',
      type: 'dog',
      gender: 'male',
      weight: 12.3,
      imageUrl: 'https://placedog.net/800/600'
    },
    {
      id: 4,
      name: 'Rocky',
      type: 'dog',
      gender: 'male',
      weight: 15.7,
      imageUrl: 'https://placedog.net/801/600'
    },

    {
      id: 6,
      name: 'Lucy',
      type: 'dog',
      gender: 'female',
      weight: 8.9,
      imageUrl: 'https://placedog.net/802/600'
    },
    {
      id: 8,
      name: 'Charlie',
      type: 'dog',
      gender: 'male',
      weight: 10.5,
      imageUrl: 'https://placedog.net/803/600'
    },
    {
      id: 10,
      name: 'Bailey',
      type: 'dog',
      gender: 'female',
      weight: 13.2,
      imageUrl: 'https://placedog.net/804/600'
    },
    {
      id: 12,
      name: 'Cooper',
      type: 'dog',
      gender: 'male',
      weight: 14.8,
      imageUrl: 'https://placedog.net/805/600'
    },
    {
      id: 14,
      name: 'Daisy',
      type: 'dog',
      gender: 'female',
      weight: 11.7,
      imageUrl: 'https://placedog.net/806/600'
    },
    {
      id: 16,
      name: 'Molly',
      type: 'dog',
      gender: 'female',
      weight: 9.8,
      imageUrl: 'https://placedog.net/807/600'
    },
    {
      id: 18,
      name: 'Tucker',
      type: 'dog',
      gender: 'male',
      weight: 16.2,
      imageUrl: 'https://placedog.net/808/600'
    },
    {
      id: 20,
      name: 'Bear',
      type: 'dog',
      gender: 'male',
      weight: 17.5,
      imageUrl: 'https://placedog.net/809/600'
    }
  ];
}
