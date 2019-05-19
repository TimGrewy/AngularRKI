import { TestBed } from '@angular/core/testing';

import { RkiService } from './rki.service';

describe('RkiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RkiService = TestBed.get(RkiService);
    expect(service).toBeTruthy();
  });
});
