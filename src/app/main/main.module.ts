import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameCardComponent } from './games-list/game-card/game-card.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    MainComponent,
    GameCardComponent,
    GamesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [ RouterModule ]
})
export class MainModule { }
