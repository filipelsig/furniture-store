import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../core/services/product/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.products;
  }
}
