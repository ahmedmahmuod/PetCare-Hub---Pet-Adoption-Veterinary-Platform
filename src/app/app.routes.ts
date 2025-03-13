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
    { path: 'blogs', loadComponent: () => import('./features/blogs/blogs.component').then(m => m.BlogsComponent) },

    { path: '**', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) } // default path wait to add 404 page
  ];
