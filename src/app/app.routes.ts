import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
  },
  {
    path: 'sports-events',
    loadComponent: () => import('./pages/sports-events/sports-events.component').then((m) => m.SportsEventsComponent)
  },
  {
    path: 'corporate-events',
    loadComponent: () => import('./pages/corporate-events/corporate-events.component').then((m) => m.CorporateEventsComponent)
  },
  {
    path: 'garba-navratri',
    loadComponent: () => import('./pages/garba-navratri/garba-navratri.component').then((m) => m.GarbaNavratriComponent)
  },
  {
    path: 'our-work',
    loadComponent: () => import('./pages/our-work/our-work.component').then((m) => m.OurWorkComponent)
  },
  {
    path: 'case-studies',
    loadComponent: () => import('./pages/case-studies/case-studies.component').then((m) => m.CaseStudiesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent)
  },
  {
    path: 'thank-you',
    loadComponent: () => import('./pages/thank-you/thank-you.component').then((m) => m.ThankYouComponent)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then((m) => m.TermsComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent)
  }
];
