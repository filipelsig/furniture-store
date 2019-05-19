import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';



@NgModule({
  declarations: [LandingComponent, HeaderComponent, ProductShowcaseComponent],
  imports: [
    SharedModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
