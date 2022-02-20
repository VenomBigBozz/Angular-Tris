import { fadeAnimation } from './animations/animation';
import {
  state,
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'tris';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `git`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../assets/icons/filled_circle_github.svg`
      )
    );
  }
}
