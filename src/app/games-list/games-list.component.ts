import { Component, Input } from '@angular/core';

import { Game } from '../shared/game.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {
  @Input() listGames: Game[];
}
