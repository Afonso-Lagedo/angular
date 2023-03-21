import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaNumComponent } from './escolha-num.component';

describe('EscolhaNumComponent', () => {
  let component: EscolhaNumComponent;
  let fixture: ComponentFixture<EscolhaNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhaNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
