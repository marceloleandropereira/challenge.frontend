import { Component, OnInit } from '@angular/core';

import games from '../assets/mocks/products.json';
import { Game } from './shared/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public listGames: Game[] = games;
}
