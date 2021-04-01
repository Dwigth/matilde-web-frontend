import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [HomeComponent, LandingComponent, QuienesSomosComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
