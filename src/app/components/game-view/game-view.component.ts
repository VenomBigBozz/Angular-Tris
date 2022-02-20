import { BoardComponent } from './board/board.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatRadioChange,
  MAT_RADIO_DEFAULT_OPTIONS,
} from '@angular/material/radio';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'warn' },
    },
  ],
})
export class GameViewComponent implements OnInit {
  @ViewChild(BoardComponent) board!: BoardComponent;
  difficulties = [
    { name: 'Ez', difficulty: 1 },
    { name: '50% of his power', difficulty: 2 },
    { name: 'Strong', difficulty: 3 },
    { name: 'God', difficulty: 4 },
  ];
  selectedDifficulty = 1;

  constructor() {}

  ngOnInit(): void {}

  setDifficulty(radioChange: MatRadioChange): void {
    this.selectedDifficulty = radioChange.value;
  }

  newGame(aiPlayer: boolean, difficulty?: number): void {
    this.board.newGame(aiPlayer, difficulty);
  }
}
