import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public clickedCardGame = new Subject<Game>();
}
