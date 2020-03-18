import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';

import { Game } from 'src/app/shared/model/game.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {}

  public gamesToBuy: Game[] = [];
  public subtotal = 0;
  public delivery = 0;
  public total = 0;
  private deliveryValue = 10;

  ngOnInit(): void {
    this.registerEvents();
  }

  public get emptyCart(): boolean {
    return this.gamesToBuy.length === 0;
  }

  private registerEvents(): void {
    this.listenerCardGameClick();
  }

  private listenerCardGameClick(): void {
    this.cartService.clickedCardGame
      .subscribe(
        (game: Game) => {
          this.gamesToBuy.push(game);
          this.addToCart(game);
        }
    );
  }

  public removeGame(index: number, price: number): void {
    this.gamesToBuy.splice(index, 1);
    this.removeFromCart(price);
  }

  /**
   * Add to cart and recalculate delivery
   *
   * @private
   * @param {Game} game
   * @memberof CartComponent
   */
  private addToCart(game: Game): void {
    this.subtotal += game.price;
    this.delivery += this.deliveryValue;
    this.totalOrder();
  }

  /**
   * Remove from cart and recalculate delivery
   *
   * @private
   * @param {number} price
   * @memberof CartComponent
   */
  private removeFromCart(price: number): void {
    this.subtotal -= price;
    this.delivery = this.gamesToBuy.length * this.deliveryValue;
    this.totalOrder();
  }

  /**
   * Calculate the total order amount
   *
   * @private
   * @memberof CartComponent
   */
  private totalOrder() {
    if (this.subtotal > 250) {
      this.delivery = 0;
    }

    this.total = this.subtotal + this.delivery;
  }

}
