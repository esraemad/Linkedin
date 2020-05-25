import { TestBed } from '@angular/core/testing';

import { WorkExperiencesServeicesService } from './work-experiences-serveices.service';

describe('WorkExperiencesServeicesService', () => {
  let service: WorkExperiencesServeicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkExperiencesServeicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
