import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Escolha2Component } from './escolha2.component';

describe('Escolha2Component', () => {
  let component: Escolha2Component;
  let fixture: ComponentFixture<Escolha2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Escolha2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Escolha2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
