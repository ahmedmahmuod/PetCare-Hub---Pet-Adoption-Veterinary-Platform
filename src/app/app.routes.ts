import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },

    { path: 'services',
        children: [
          { path: '', loadComponent: () => import('./features/ServicesProfile/all-services/all-services.component').then(m => m.AllServicesComponent) },
          { path: ':serviceId', loadComponent: () => import('./features/ServicesProfile/single-service/single-service.component').then(m => m.SingleServiceComponent) }
        ]
    },

    { path: 'adoption', data: { disableScroll: true }, loadComponent: () => import('./features/adoption/adoption.component').then(m => m.AdoptionComponent),
      children: [
        { path: 'dogs', loadComponent: () => import('./features/adoption/dogs/dogs.component').then(m => m.DogsComponent) },
        { path: 'cats', loadComponent: () => import('./features/adoption/cats/cats.component').then(m => m.CatsComponent) },
        { path: 'shelters', loadComponent: () => import('./features/adoption/shelters/sehalters.component').then(m => m.SheltersListComponent) },
      ]
    },
    
    { path: 'adoption/shelters/:shelterId', loadComponent: () => import('./features/adoption/shelters/shelter-details/shelter-details.component').then(m => m.ShelterDetailsComponent) },
    { path: 'adoption/:pets', loadComponent: () => import('./features/adoption/pets/pets.component').then(m => m.PetsComponent) },
    
    { path: 'veterinary', data: { disableScroll: true }, loadComponent: () => import('./features/vets/vets.component').then(m => m.VetsComponent),
      children: [
        { path: 'doctors', loadComponent: () => import('./features/vets/doctors/doctors.component').then(m => m.DoctorsComponent) },
        { path: 'clinics', loadComponent: () => import('./features/vets/clinics/clinics.component').then(m => m.ClinicsComponent) },
      ]
    },
  
    { path: 'blogs', loadComponent: () => import('./features/blogs/blogs.component').then(m => m.BlogsComponent) },
    { path: '**', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) } // default path wait to add 404 page
  ];
