import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
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
