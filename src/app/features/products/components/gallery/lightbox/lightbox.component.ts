import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface LighboxImageSet {
  startIndex: number;
  images: string[];
}

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {
  currentIndex;
  images: string[];

  constructor(
    public dialogRef: MatDialogRef<LightboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LighboxImageSet
  ) {
    this.currentIndex = data.startIndex;
    this.images = data.images;
  }

  ngOnInit() {}

  next() {
    if (this.currentIndex !== this.images.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex !== 0) {
      this.currentIndex--;
    }
  }
}
