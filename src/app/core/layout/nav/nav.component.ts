import { Component, OnInit } from '@angular/core';

interface MenuOption {
  name: string;
  url: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuOptions: MenuOption[] = [
    {name: 'Møbler', url: ''},
    {name: 'Om os', url: ''},
    {name: 'Lædertyper & Stof', url: ''},
    {name: 'Kontakt', url: ''},
    {name: 'Åbningstider', url: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

}
