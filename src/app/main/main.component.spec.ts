import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { GameListOrder } from '../shared/enum/game-list-order.enum';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the selected option label when changing the select value', () => {
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.value = GameListOrder.ALPHABETICAL;

    fixture.detectChanges();

    expect(select.options[select.selectedIndex].innerHTML.toUpperCase())
      .toContain('Ordem Alfabética'.toUpperCase());
  });

  it('should call the sort function when changing the sort option', () => {
    const methodSortGames = spyOn((component as any), 'sortGames');
    component.gameListOrder.setValue(GameListOrder.LOWEST_PRICE);

    fixture.detectChanges();

    expect(methodSortGames).toHaveBeenCalled();
  });
});
