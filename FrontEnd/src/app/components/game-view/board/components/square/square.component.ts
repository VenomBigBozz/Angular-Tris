import { Component, Input } from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 250 }),
    fadeOutOnLeaveAnimation({ duration: 250 }),
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';

  changeColor(): string {
    switch (this.value) {
      case 'X':
        return 'yellow';

      case 'O':
        return 'cyan';

      default:
        return 'light-grey';
    }
  }
}
