import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {CustomerComponent} from './components/customer.component';
import {ServicesComponent} from './components/services.component';


const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
