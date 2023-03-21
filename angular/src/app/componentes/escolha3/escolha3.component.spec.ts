import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Escolha3Component } from './escolha3.component';

describe('Escolha3Component', () => {
  let component: Escolha3Component;
  let fixture: ComponentFixture<Escolha3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Escolha3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Escolha3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
