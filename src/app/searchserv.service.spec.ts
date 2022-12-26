import { TestBed } from '@angular/core/testing';

import { SearchservService } from './searchserv.service';

describe('SearchservService', () => {
  let service: SearchservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
