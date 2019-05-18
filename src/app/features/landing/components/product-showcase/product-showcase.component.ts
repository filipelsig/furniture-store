import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-showcase',
  templateUrl: './product-showcase.component.html',
  styleUrls: ['./product-showcase.component.scss'],
  host: {
    'reverse': 'layoutReverse',
  }
})
export class ProductShowcaseComponent implements OnInit {

  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  get layoutReverse() {
    return this.index % 2 === 0;
  }

  setClasses() {
    return this.layoutReverse ? {reverse: true} : {reverse: false};

  }

}
