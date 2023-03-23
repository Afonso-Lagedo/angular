import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTwoComponent } from './lista-two.component';

describe('ListaTwoComponent', () => {
  let component: ListaTwoComponent;
  let fixture: ComponentFixture<ListaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
