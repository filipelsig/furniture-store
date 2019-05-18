import {Component, OnInit, Input} from '@angular/core';
import {LightboxComponent} from './lightbox/lightbox.component';
import {MatDialog} from '@angular/material';
import {reveal} from './gallery.animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [reveal]
})
export class GalleryComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() images: string[];

  ngOnInit() {}

  imgClick(index: number) {
    const ref = this.dialog.open(LightboxComponent, {
      backdropClass: 'lightbox-bg',
      panelClass: 'lightbox',
      data: {
        images: this.images,
        startIndex: index
      }
    });
  }
}
