import { TestBed } from '@angular/core/testing';

import { SpringapiService } from './springapi.service';

describe('SpringapiService', () => {
  let service: SpringapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
