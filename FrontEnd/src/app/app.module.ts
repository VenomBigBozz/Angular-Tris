import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbActionsModule,
  NbPopoverModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { GameViewComponent } from './components/game-view/game-view.component';
import { SquareComponent } from './components/game-view/board/components/square/square.component';
import { BoardComponent } from './components/game-view/board/board.component';
import { TopViewComponent } from './components/top-view/top-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RippleOverlayComponent } from './components/game-view/board/components/ripple-overlay/ripple-overlay.component';

@NgModule({
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Nebular
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbButtonModule,
    NbPopoverModule,

    // Angular/material
    MatRippleModule,
    MatButtonModule,
    MatIconModule,

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
