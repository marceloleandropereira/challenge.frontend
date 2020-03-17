import { Component, OnInit } from '@angular/core';

import { Game } from '../shared/game.model';
import games from '../../assets/mocks/products.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public listGames: Game[] = games;
}
