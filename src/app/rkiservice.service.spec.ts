import { TestBed } from '@angular/core/testing';

import { RkiserviceService } from './rkiservice.service';

describe('RkiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RkiserviceService = TestBed.get(RkiserviceService);
    expect(service).toBeTruthy();
  });
});
