import { TestBed } from '@angular/core/testing';

import { EmpDataLinkService } from './emp-data-link.service';

describe('EmpDataLinkService', () => {
  let service: EmpDataLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpDataLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
