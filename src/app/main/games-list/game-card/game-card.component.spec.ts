import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GameCardComponent } from './game-card.component';
import { Game } from 'src/app/shared/model/game.model';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;
  const gameMock: Game = {
    id: 12,
    name: 'Mortal Kombat XL',
    price: 69.99,
    score: 150,
    image: 'mortal-kombat-xl.png'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render anything if not receiving game by input', () => {
    component.game = null;

    fixture.detectChanges();
    const divs: any = fixture.debugElement.queryAll(By.css('div'));

    expect(divs.length).toBe(0);
  });

  it('should render content if receiving game by input', () => {
    component.game = gameMock;

    fixture.detectChanges();
    const divs: any = fixture.debugElement.queryAll(By.css('div'));

    expect(divs.length).toBeGreaterThan(0);
  });

  it('should call addGameToCart function on click add to cart', () => {
    const methodAddToCart = spyOn((component as any), 'addGameToCart');
    component.game = gameMock;

    fixture.detectChanges();

    const div = fixture.debugElement.nativeElement.querySelector('.card__buy');
    div.click();

    expect(methodAddToCart).toHaveBeenCalled();
  });

  it('should show the option to add to the cart on the card hover', () => {
    component.game = gameMock;

    fixture.detectChanges();
    const divCard = fixture.debugElement.nativeElement.querySelector('.card');
    divCard.dispatchEvent(new MouseEvent('mouseover'));
    const divCardBuy: any = fixture.debugElement.query(By.css('.card__buy'));

    expect(divCardBuy.nativeNode.hidden).toBeFalsy();
  });

});
