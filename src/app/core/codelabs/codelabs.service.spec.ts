import { TestBed } from '@angular/core/testing';

import { CodelabsService } from './codelabs.service';

describe('CodelabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodelabsService = TestBed.get(CodelabsService);
    expect(service).toBeTruthy();
  });
});
