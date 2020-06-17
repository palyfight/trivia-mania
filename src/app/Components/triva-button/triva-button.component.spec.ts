import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivaButtonComponent } from './triva-button.component';

describe('TrivaButtonComponent', () => {
  let component: TrivaButtonComponent;
  let fixture: ComponentFixture<TrivaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrivaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrivaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
