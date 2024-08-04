import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab-menu/tabs/tabs.routes').then((m) => m.routes),
  },
];
