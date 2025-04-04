import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PageTitleComponent } from "../../../shared/components/page-title/pageTitle.component";
import { TranslateModule } from '@ngx-translate/core';
import { AdoptionCardComponent } from "../adoption-section/adoption-card.compontnet";
import { CommonModule } from '@angular/common';
import { PetFilterComponent } from "../../../shared/components/filter/filter.component";
import { Store } from '@ngrx/store';
import { selectPets, selectPetsLoading } from '../../../stores/pets-store/pets.selector';
import { map, Observable, of, tap } from 'rxjs';
import { Pet } from '../../../core/models/pets/pet.model';
import * as PetsActions from '../../../stores/pets-store/pets.actions';
import { ActivatedRoute } from '@angular/router';
import { AdoptionSkeletonComponent } from "../../../shared/components/skeletons/adoption-card/adoption-skelton.component";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
  standalone: true,
  imports: [PageTitleComponent, TranslateModule, CommonModule, AdoptionCardComponent, PetFilterComponent, AdoptionSkeletonComponent],
})
export class PetsComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef)

  type!: string;
  title!: string;
  originalPets$: Observable<Pet[]> = of([]);
  filteredPets$: Observable<Pet[]> = of([]);
  currentFilter: 'all' | 'dog' | 'cat' = 'all';
  loading =  signal<boolean>(false);
  

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntilDestroyed(this.destroyRef),
      tap(() => this.loading.set(true))
    ).subscribe(params => {
      this.type = params.get('pets') || '';
      this.loadPets();
    });


    const titlesMap: { [key: string]: string } = {
      getallpets: 'Pages.Adoption.Pets_For_Adoption.Title',
      getdogs: 'Pages.Adoption.Dogs.Dogs_For_Adoption.Title',
      'get-top-collection-dog': 'Pages.Adoption.Dogs.Top_Collection_Of_Dogs.Title',
      filterdogsforkids: 'Pages.Adoption.Dogs.Best_Dogs_for_kids.Title',
      filtercatsforkids: 'Pages.Adoption.Cats.Best_Cats_for_kids.Title',
      getcats: 'Pages.Adoption.Cats.Cats_For_Adoption.Title',
      'get-top-collection-cats': 'Pages.Adoption.Cats.Top_Collection_Of_Cats.Title',
      successfullyAdaped: 'Pages.Adoption.Success_Adoptions.Title'
    };
    this.title = titlesMap[this.type] || 'Default Title';

  }
  
  loadPets() {
    this.store.dispatch(PetsActions.loadPets({ petType: this.type }));

    // Use the loading selector from your store if available
    this.store.select(selectPetsLoading).subscribe(isLoading => {
      this.loading.set(isLoading);
    });

    this.originalPets$ = this.store.select(selectPets);
    this.filteredPets$ = this.originalPets$;
  }


  onFilterChange(filterType: 'all' | 'dog' | 'cat') {
    this.currentFilter = filterType;
    this.filteredPets$ = this.originalPets$.pipe(map (pets => {
        if (!pets) return [];
        return filterType === 'all' ? pets : pets.filter(pet => pet?.type?.toLowerCase() === filterType);
      })
    );
  }
  
}
