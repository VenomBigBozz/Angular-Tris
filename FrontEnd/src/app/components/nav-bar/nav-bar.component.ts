import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  gameIcon: string;
  archiveIcon: string;
  githubIcon: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.iconChange(this.router.url);
      }
    });
    this.githubIcon = 'github-outline';
  }

  ngOnInit(): void {}

  goToLink(url: string): void {
    window.open(url, '_blank');
    this.iconChange(url);
  }

  iconChange(url: string): void {
    switch (url) {
      case '/game':
        this.gameIcon = 'plus-square';
        this.archiveIcon = 'archive-outline';
        break;
      case '/top':
        this.gameIcon = 'plus-square-outline';
        this.archiveIcon = 'archive';
        break;
    }
  }
}
