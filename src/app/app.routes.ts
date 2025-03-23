import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    { path: 'services',
        children: [
          { path: '', loadComponent: () => import('./features/ServicesProfile/all-services/all-services.component').then(m => m.AllServicesComponent) },
          { path: ':type', loadComponent: () => import('./features/ServicesProfile/single-service/single-service.component').then(m => m.SingleServiceComponent) }
        ]
    },
    { path: 'adoption', loadComponent: () => import('./features/adoption/adoption.component').then(m => m.AdoptionComponent),
      children: [
        { path: 'dogs', loadComponent: () => import('./features/adoption/dogs/dogs.component').then(m => m.DogsComponent) },
        { path: 'cats', loadComponent: () => import('./features/adoption/cats/cats.component').then(m => m.CatsComponent) },
        { path: 'shelters', loadComponent: () => import('./features/adoption/shelters/sehalters.component').then(m => m.SehaltersComponent) },
    ]},
    { path: 'blogs', loadComponent: () => import('./features/blogs/blogs.component').then(m => m.BlogsComponent) },
    { path: '**', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) } // default path wait to add 404 page
  ];
