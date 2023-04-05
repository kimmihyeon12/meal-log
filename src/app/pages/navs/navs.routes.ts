import { Routes } from '@angular/router';
import { NavsPage } from './navs.page';

export const routes: Routes = [
  {
    path: '',
    component: NavsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./nav-home/navHome.page').then(m => m.NavHomePage)
      },
      {
        path: 'calender',
        loadComponent: () => import('./nav-calender/navCalender.page').then(m => m.navCalenderPage)
      },
      {
        path: 'my',
        loadComponent: () => import('./nav-my/navMy.page').then(m => m.NavMyPage)
      },
      {
        path: '',
        redirectTo: '/navs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];
