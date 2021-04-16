import { Component, OnInit } from '@angular/core';
import { Memo } from '../memo';
import {MEMOS} from '../fake-memo'

@Component ({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css']
})
export class MemosComponent implements OnInit {
  memos = MEMOS

  constructor() { }

  ngOnInit(): void {
  }

  selectedMemo?: Memo;
  onSelect(memo: Memo): void {
    this.selectedMemo = memo;
  }

}
