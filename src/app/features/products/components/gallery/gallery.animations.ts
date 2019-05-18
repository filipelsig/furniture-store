import {trigger, query, transition, animate, style, stagger} from '@angular/animations';

export const reveal = trigger('reveal', [
  transition(':enter', [
    query(
      'img',
      [
        style({opacity: 0, transform: 'translateY(12px)'}),
        stagger(
          '100ms',
          animate(
            '300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            style({opacity: 1, transform: 'translateY(0)'})
          )
        )
      ],
      {
        optional: true
      }
    )
  ])
]);
