import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClimberProfileComponent } from './climber-profile/climber-profile.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'climbers/:id',
    component: ClimberProfileComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
