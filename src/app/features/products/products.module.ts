import {NgModule} from '@angular/core';

import {ProductsRoutingModule} from './products-routing.module';
import {DetailComponent} from './pages/detail/detail.component';
import {ProductOptionComponent} from './components/product-option/product-option.component';
import {SharedModule} from 'src/app/shared/shared.module';
import { MaterialPickerComponent } from './components/material-picker/material-picker.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [DetailComponent, ProductOptionComponent, MaterialPickerComponent, PurchaseComponent, GalleryComponent],
  imports: [SharedModule, ProductsRoutingModule]
})
export class ProductsModule {}
