import { TestBed } from '@angular/core/testing';

import { ListaTwoService } from './lista-two.service';

describe('ListaTwoService', () => {
  let service: ListaTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
