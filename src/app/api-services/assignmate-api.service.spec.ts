import { TestBed } from '@angular/core/testing';

import { AssignmateApiService } from './assignmate-api.service';

describe('AssignmateApiService', () => {
  let service: AssignmateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
