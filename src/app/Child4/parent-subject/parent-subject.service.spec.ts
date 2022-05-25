import { TestBed } from '@angular/core/testing';

import { ParentSubjectService } from './parent-subject.service';

describe('ParentSubjectService', () => {
  let service: ParentSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
