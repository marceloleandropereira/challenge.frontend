import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Game } from '../shared/model/game.model';
import { GameListOrder } from '../shared/enum/game-list-order.enum';
import { UtilArray } from '../shared/util/util-array';
import games from '../../assets/mocks/products.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public listGames: Game[] = games;
  public enumGameListOrder = GameListOrder;
  public gameListOrder = new FormControl(this.enumGameListOrder.HIGHEST_SCORE);

  ngOnInit(): void {
    this.sortGames(this.gameListOrder.value);
    this.subscriptOrderValue();
  }

  /**
   * Subscribe of the select field to do the sorting
   *
   * @private
   * @memberof MainComponent
   */
  private subscriptOrderValue(): void {
    this.gameListOrder.valueChanges.subscribe((optionValue: string) => {
      this.sortGames(optionValue);
    });
  }

  /**
   * Sort games by selected option
   *
   * @private
   * @param {string} optionValue
   * @memberof MainComponent
   */
  private sortGames(optionValue: string): void {
    const order = (optionValue === this.enumGameListOrder.HIGHEST_SCORE ? 'desc' : 'asc');
    this.listGames.sort(UtilArray.compareValues(optionValue, order));
  }

}
