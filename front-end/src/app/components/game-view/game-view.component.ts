import { BoardComponent } from './board/board.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
})
export class GameViewComponent implements OnInit {
  @ViewChild(BoardComponent) board: BoardComponent;
  vsAiPlayer: boolean = null;

  constructor() {}

  ngOnInit(): void {}

  newGame(aiPlayer: boolean): void {
    this.vsAiPlayer = aiPlayer;
    this.board.newGame(aiPlayer);
  }
}
