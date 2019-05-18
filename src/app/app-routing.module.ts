import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: './features/landing/landing.module#LandingModule'},
  // { path: 'about', loadChildren: './features/about-us/about-us.module#AboutUsModule' },
  {path: 'products', loadChildren: './features/products/products.module#ProductsModule'},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
