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

  images: string[] = [
    'https://www.mobelpolstren.dk/wp-content/uploads/Nubuck-%C3%A6g-front-1-of-1.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/%C3%86gget-Walnut-front-v.3-1-of-1-2.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/%C3%A6gget-sort-classic-front-1-of-1.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/%C3%A6gget-dark-brown-front-1-of-1.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/IMG_3474.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/%C3%86gget-og-skammel-setting-1-of-1-3.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/14-6-%C3%86gget-Walnut-kederrem-1-of-1-1.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/%C3%86gget-classic-sort-talje-1-of-1.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/%C3%86gget-classic-sort-vinge-1-of-1.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/14-6-%C3%86gget-Walnut-close-1-of-1.jpg',
    'https://www.mobelpolstren.dk/wp-content/uploads/14-6-%C3%86gget-Walnut-hynde-1-of-1.jpg'
  ];

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
