import { Component, OnInit } from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 250 }),
  ],
})
export class BoardComponent implements OnInit {
  squares: any[];
  squares2: any[];
  xIsNext: boolean;
  winner: string;

  ngOnInit(): void {}

  newGame(): void {
    this.squares = Array(9).fill(null);
    this.squares2 = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number): void {
    if (!this.squares[idx] && !this.winner) {
      this.squares[idx] = this.player;
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): any {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let filled = null;
    for (const [a, b, c] of lines) {
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    this.squares.forEach((element) => {
      filled += element ? 1 : 0;
    });
    return filled >= 9 ? 'tie' : null;
  }
}
