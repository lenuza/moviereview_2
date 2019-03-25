import { TestBed } from '@angular/core/testing';

import { GetlocalstorageService } from './getlocalstorage.service';

describe('GetlocalstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetlocalstorageService = TestBed.get(GetlocalstorageService);
    expect(service).toBeTruthy();
  });
});
