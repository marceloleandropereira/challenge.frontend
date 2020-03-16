import { Component, Input } from '@angular/core';

import { Game } from 'src/app/shared/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() public game: Game;
  public mouseOver = false;
}
