import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LightboxComponent} from '../../components/gallery/lightbox/lightbox.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

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
