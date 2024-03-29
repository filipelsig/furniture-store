import {Component, OnInit} from '@angular/core';
import {menuList} from './nav.animations';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
interface MenuOption {
  name: string;
  url: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [menuList]
})
export class NavComponent implements OnInit {
  mobileLayout: Observable<boolean>;
  showMenu = false;

  menuOptions: MenuOption[] = [
    {name: 'Møbler', url: '/products'},
    {name: 'Om os', url: ''},
    {name: 'Lædertyper & Stof', url: ''},
    {name: 'Kontakt', url: ''},
    {name: 'Åbningstider', url: ''}
  ];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit() {
    this.mobileLayout = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map(result => result.matches));
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
    this.showMenu = false;
  }
}
