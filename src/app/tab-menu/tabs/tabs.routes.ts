import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'budgets',
        loadComponent: () =>
          import('../budgets-operation/budgets.page').then((m) => m.budgetsPage),
      },
      {
        path: 'budgets_list',
        loadComponent: () =>
          import('../budgets-list/budgets_list.page').then((m) => m.budgets_listPage),
      },
      {
        path: 'options',
        loadComponent: () =>
          import('../options/options.page').then((m) => m.optionsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/budgets',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/budgets_list',
    pathMatch: 'full',
  },
];
