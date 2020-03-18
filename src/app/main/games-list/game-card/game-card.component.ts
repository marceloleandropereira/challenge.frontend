import { Component, Input } from '@angular/core';

import { Game } from 'src/app/shared/model/game.model';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

  constructor(private cartService: CartService) {}

  @Input() public game: Game;

  public addGameToCart() {
    this.cartService.clickedCardGame.next(this.game);
  }
}
