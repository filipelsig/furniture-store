import {Component, OnInit} from '@angular/core';
import {LightboxComponent} from './lightbox/lightbox.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  imgClick(url: string) {
    const ref = this.dialog.open(LightboxComponent, {
      backdropClass: 'lightbox-bg',
      panelClass: 'lightbox',
      data: {url}
    });
  }
}
