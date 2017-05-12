import { TestBed, inject } from '@angular/core/testing';

import { ClimbersService } from './climbers.service';

describe('ClimbersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClimbersService]
    });
  });

  it('should ...', inject([ClimbersService], (service: ClimbersService) => {
    expect(service).toBeTruthy();
  }));
});
