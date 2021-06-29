import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tris';

  goToLink(url: string, blank: boolean): void {
    blank ? window.open(url, '_blank') : (location.href = url);
  }
}
