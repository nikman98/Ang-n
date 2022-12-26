import { TestBed } from '@angular/core/testing';

import { NewstopushserveService } from './newstopushserve.service';

describe('NewstopushserveService', () => {
  let service: NewstopushserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewstopushserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
