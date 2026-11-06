import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home'),
  },
  {
    path: 'shop',
    loadComponent: () => import('./features/shop/shop'),
  },
  {
    path: 'shop/:id',
    loadComponent: () => import('./features/shop/product-details/product-details'),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./features/contact-us/contact-us'),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found'),
  },
];
