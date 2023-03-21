import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emissor3Component } from './emissor3.component';

describe('Emissor3Component', () => {
  let component: Emissor3Component;
  let fixture: ComponentFixture<Emissor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emissor3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emissor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
