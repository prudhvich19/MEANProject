import { TestBed } from '@angular/core/testing';

import { ShowTestService } from './show-test.service';

describe('ShowTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowTestService = TestBed.get(ShowTestService);
    expect(service).toBeTruthy();
  });
});
