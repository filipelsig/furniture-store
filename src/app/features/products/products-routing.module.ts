import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
