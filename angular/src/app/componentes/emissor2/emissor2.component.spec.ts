import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emissor2Component } from './emissor2.component';

describe('Emissor2Component', () => {
  let component: Emissor2Component;
  let fixture: ComponentFixture<Emissor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emissor2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emissor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
