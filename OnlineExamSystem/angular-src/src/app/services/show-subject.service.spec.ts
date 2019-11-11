import { TestBed } from '@angular/core/testing';

import { ShowSubjectService } from './show-subject.service';

describe('ShowSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowSubjectService = TestBed.get(ShowSubjectService);
    expect(service).toBeTruthy();
  });
});
