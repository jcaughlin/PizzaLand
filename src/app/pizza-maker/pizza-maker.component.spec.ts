import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMakerComponent } from './pizza-maker.component';

describe('PizzaMakerComponent', () => {
  let component: PizzaMakerComponent;
  let fixture: ComponentFixture<PizzaMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
