import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'profile',
        // component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'app',
        // component: AppComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        // component: SettingsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contacto',
        // component: ContactoComponent
      },
      {
        path: 'faq',
        // component: FaqComponent
      },
      {
        path: 'quienes-somos',
        component: QuienesSomosComponent
      },
      {
        path: 'temario',
        // component: TemarioComponent
      },
      { path: '', redirectTo: '/landing/home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
