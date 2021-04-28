import { Injectable } from '@angular/core';
import { Memo } from './memo';
import { MEMOS } from './fake-memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  getHeroes(): Memo[] {
    return MEMOS;
  }

  constructor() { }
}
