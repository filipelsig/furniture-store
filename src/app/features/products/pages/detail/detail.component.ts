import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LightboxComponent} from '../../components/gallery/lightbox/lightbox.component';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from 'src/app/core/services/product/product.service';
import {Observable} from 'rxjs';
import {Product} from 'src/app/core/models/product.model';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product$: Observable<Product> = null;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.productService.product(id);
      })
    );
  }

  onHeroClick(url: string) {
    const ref = this.dialog.open(LightboxComponent, {
      backdropClass: 'lightbox-bg',
      panelClass: 'lightbox',
      data: {
        images: [url],
        startIndex: 0
      }
    });
  }
}
