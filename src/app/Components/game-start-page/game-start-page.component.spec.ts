import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStartPageComponent } from './game-start-page.component';

describe('GameStartPageComponent', () => {
  let component: GameStartPageComponent;
  let fixture: ComponentFixture<GameStartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
