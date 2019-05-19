import {NgModule} from '@angular/core';

import {ProductsRoutingModule} from './products-routing.module';
import {DetailComponent} from './pages/detail/detail.component';
import {ProductOptionComponent} from './components/product-option/product-option.component';
import {SharedModule} from '../../shared/shared.module';
import {MaterialPickerComponent} from './components/material-picker/material-picker.component';
import {PurchaseComponent} from './components/purchase/purchase.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {LightboxComponent} from './components/gallery/lightbox/lightbox.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    DetailComponent,
    ProductOptionComponent,
    MaterialPickerComponent,
    PurchaseComponent,
    GalleryComponent,
    LightboxComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  entryComponents: [LightboxComponent],
  imports: [SharedModule, ProductsRoutingModule]
})
export class ProductsModule {}
