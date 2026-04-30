import { TestBed } from '@angular/core/testing';

import { TasksMockApiService } from './tasks-mock-api.service';

describe('TasksMockApiService', () => {
  let service: TasksMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
