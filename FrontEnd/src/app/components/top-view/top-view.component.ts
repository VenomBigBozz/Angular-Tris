import {
  state,
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html',
  styleUrls: ['./top-view.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('.5s ease-out', style({ opacity: '0' })),
      ]),
    ]),
  ],
})
export class TopViewComponent implements OnInit {
  data = [
    { id: 1, date: Date.now(), winner: 'winner is x' },
    { id: 2, date: Date.now(), winner: 'winner is x' },
    { id: 3, date: Date.now(), winner: 'winner is o' },
    { id: 4, date: Date.now(), winner: 'winner is x' },
    { id: 5, date: Date.now(), winner: 'winner is o' },
    { id: 6, date: Date.now(), winner: 'winner is x' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
