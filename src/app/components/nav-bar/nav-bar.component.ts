import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ duration: 250 }),
    fadeOutOnLeaveAnimation({ duration: 250 }),
  ],
})
export class NavBarComponent implements OnInit {
  gameIconFilled: boolean;
  leaderboardIconFilled: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.iconChange(this.router.url);
      }
    });
  }

  ngOnInit(): void {}

  goToLink(url: string): void {
    window.open(url, '_blank');
    this.iconChange(url);
  }

  iconChange(url: string): void {
    switch (url) {
      case '/game':
        this.gameIconFilled = true;
        this.leaderboardIconFilled = false;
        break;
      case '/top':
        this.gameIconFilled = false;
        this.leaderboardIconFilled = true;
        break;
    }
  }
}
