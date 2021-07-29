// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Application imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Nebular modules
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

// Angular/material modules
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

// Service worker module
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Custom components
import { GameViewComponent } from './components/game-view/game-view.component';
import { SquareComponent } from './components/game-view/board/components/square/square.component';
import { BoardComponent } from './components/game-view/board/board.component';
import { TopViewComponent } from './components/top-view/top-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RippleOverlayComponent } from './components/game-view/board/components/ripple-overlay/ripple-overlay.component';

@NgModule({
  // Custom components
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    GameViewComponent,
    TopViewComponent,
    PageNotFoundComponent,
    NavBarComponent,
    RippleOverlayComponent,
  ],
  imports: [
    // Angular modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Nebular modules
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,

    // Angular/material modules
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,

    // Service worker module
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
