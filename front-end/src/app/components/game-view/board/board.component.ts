import { element } from 'protractor';
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
    fadeInOnEnterAnimation({ duration: 250 }),
    fadeOutOnLeaveAnimation({ duration: 250 }),
  ],
})
export class BoardComponent implements OnInit {
  squares: any[];
  squares2: any[];
  xIsNext: boolean;
  winner: string;
  aiPlayer: boolean;

  ngOnInit(): void {}

  newGame(aiPlayer: boolean): void {
    this.squares = Array(9).fill(null);
    this.squares2 = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.aiPlayer = aiPlayer;
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number): void {
    if (!this.squares[idx] && !this.winner) {
      this.squares[idx] = this.player;
      if (this.aiPlayer) {
        this.squares[this.aiMove()] = 'O';
      } else {
        this.xIsNext = !this.xIsNext;
      }
    }
    this.winner = this.checkWinner(this.squares);
  }

  checkWinner(board: any[]): any {
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // If there is a winner the player symbol is returned
        return board[a];
      }
    }
    board.forEach((element) => {
      filled += element ? 1 : 0;
    });
    return filled >= 9 ? 'tie' : null;
  }

  aiMove(): number {
    let board = this.squares;
    let idxBestMove: number;
    let bestScore = -Infinity;
    board.forEach((element, index) => {
      if (element === null) {
        board[index] = 'O';
        let score = this.minimax(board, false);
        board[index] = null;
        if (score > bestScore) {
          bestScore = score;
          idxBestMove = index;
        }
      }
    });
    return idxBestMove;
  }

  minimax(board: any[], isMaximizing: boolean, depth: number = 0): number {
    const scores = { X: -10, O: 10, tie: 0 };
    const result = this.checkWinner(board);
    if (result !== null) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;

      board.forEach((element, index) => {
        // Is the position empty?
        if (element === null) {
          board[index] = 'O';
          let score = this.minimax(board, false, depth + 1);
          board[index] = null;
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      board.forEach((element, index) => {
        // Is the position empty?
        if (element === null) {
          board[index] = 'X';
          let score = this.minimax(board, true, depth + 1);
          board[index] = null;
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  }
}
