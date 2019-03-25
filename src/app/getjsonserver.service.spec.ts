import { TestBed } from '@angular/core/testing';

import { GetjsonserverService } from './getjsonserver.service';

describe('GetjsonserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetjsonserverService = TestBed.get(GetjsonserverService);
    expect(service).toBeTruthy();
  });
});
