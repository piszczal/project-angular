import { TestBed, inject } from '@angular/core/testing';

import { ActivationGuard } from './ActivationGuards';

describe('ActivationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivationGuard]
    });
  });

  it('should be created', inject([ActivationGuard], (service: ActivationGuard) => {
    expect(service).toBeTruthy();
  }));
});
