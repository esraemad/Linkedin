import { TestBed } from '@angular/core/testing';

import { WorktypesService } from './worktypes.service';

describe('WorktypesService', () => {
  let service: WorktypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorktypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
