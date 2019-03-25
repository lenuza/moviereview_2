import { TestBed } from '@angular/core/testing';

import { jsonserverService } from './jsonserver.service';

describe('GetjsonserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: jsonserverService = TestBed.get(jsonserverService);
    expect(service).toBeTruthy();
  });
});
