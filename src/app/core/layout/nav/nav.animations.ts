import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

export const menuList = trigger('menuList', [
  transition(':enter', [
    query('.mat-button', [
      style({height: '0px', color: 'rgba(0,0,0,0)'}),
      animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({height: '*', color: '*'}))
    ], {optional: true})
  ]),
  transition(':leave', [
    query('.mat-button', [
      style({height: '*', color: '*'}),
      animate('250ms cubic-bezier(0.4, 0.0, 1, 1)', style({height: '0px', color: 'rgba(0,0,0,0)'}))
    ], {optional: true})
  ])
]);
