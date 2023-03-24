import { TestBed } from '@angular/core/testing';

import { DecaissementService } from './decaissement.service';

describe('DecaissementService', () => {
  let service: DecaissementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecaissementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
