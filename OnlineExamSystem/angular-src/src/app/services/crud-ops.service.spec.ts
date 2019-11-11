import { TestBed } from '@angular/core/testing';

import { CrudOpsService } from './crud-ops.service';

describe('CrudOpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudOpsService = TestBed.get(CrudOpsService);
    expect(service).toBeTruthy();
  });
});
