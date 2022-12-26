import { TestBed } from '@angular/core/testing';

import { IbmplayerGuard } from './ibmplayer.guard';

describe('IbmplayerGuard', () => {
  let guard: IbmplayerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IbmplayerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
