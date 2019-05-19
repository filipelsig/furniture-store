import {Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Welcome');
  }
}
