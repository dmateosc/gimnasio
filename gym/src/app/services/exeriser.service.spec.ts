import { TestBed } from '@angular/core/testing';

import { ExeriseService } from './exerise.service';

describe('ExeriserService', () => {
  let service: ExeriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExeriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
