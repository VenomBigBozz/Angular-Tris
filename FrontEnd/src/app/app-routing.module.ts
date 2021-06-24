import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent } from './components/game-view/game-view.component';

const routes: Routes = [
  { path: '', component: GameViewComponent },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('modules/games/games.module').then((m) => m.GamesModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
