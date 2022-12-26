import { TestBed } from '@angular/core/testing';

import { CommentserveService } from './commentserve.service';

describe('CommentserveService', () => {
  let service: CommentserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
