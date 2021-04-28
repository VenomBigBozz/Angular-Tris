import { Component, OnInit, Input } from '@angular/core';
import { Memo } from '../memo'


@Component({
  selector: 'app-memo-detail',
  templateUrl: './memo-detail.component.html',
  styleUrls: ['./memo-detail.component.css']
})
export class MemoDetailComponent implements OnInit {

  @Input() memo?: Memo;

  constructor() { }

  ngOnInit(): void {
  }

}
