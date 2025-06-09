import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ensureLoginGuard } from './ensure-login.guard';

describe('ensureLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ensureLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
