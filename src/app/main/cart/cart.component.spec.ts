import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartComponent } from './cart.component';
import { Game } from 'src/app/shared/model/game.model';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  const game1: Game = {
    id: 12,
    name: 'Mortal Kombat XL',
    price: 69.99,
    score: 150,
    image: 'mortal-kombat-xl.png'
  };

  const game2: Game = {
    id: 102,
    name: 'The Witcher III Wild Hunt',
    price: 119.5,
    score: 250,
    image: 'the-witcher-iii-wild-hunt.png'
  };

  const game3: Game = {
    id: 99,
    name: 'Call Of Duty WWII',
    price: 249.99,
    score: 205,
    image: 'call-of-duty-wwii.png'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the cart empty, if there is no game added', () => {
    component.gamesToBuy = [];

    fixture.detectChanges();
    const divEmptyCart: any = fixture.debugElement.query(By.css('.cart__empty'));

    expect(divEmptyCart.nativeElement.innerHTML).toContain('o seu carrinho está vazio');
  });

  it('should display the word item in the singular if there is only one game in the cart', () => {
    component.gamesToBuy.push(game1);

    fixture.detectChanges();
    const divEmptyCart: any = fixture.debugElement.query(By.css('.cart__title--total'));

    expect(divEmptyCart.nativeElement.innerHTML).toContain('item');
  });

  it('should display the word item in the plural if there is more than one game in the cart', () => {
    component.gamesToBuy.push(game1);
    component.gamesToBuy.push(game2);

    fixture.detectChanges();
    const divEmptyCart: any = fixture.debugElement.query(By.css('.cart__title--total'));

    expect(divEmptyCart.nativeElement.innerHTML).toContain('itens');
  });

  it('should remove the delivery if the total value in products is greater than 250', () => {
    (component as any).addToCart(game2);
    (component as any).addToCart(game3);

    expect(component.subtotal).toBeGreaterThan(250);
    expect(component.delivery).toBe(0);
  });

  it('if the subtotal is less than 250 there must be delivery costs', () => {
    (component as any).addToCart(game3);
    (component as any).addToCart(game1);
    (component as any).addToCart(game2);
    (component as any).removeGame(0, 249.99);

    expect(component.subtotal).toBeGreaterThan(0);
    expect(component.delivery).toBeLessThan(250);
  });
});
