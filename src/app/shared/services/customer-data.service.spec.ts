import { TestBed } from '@angular/core/testing';

import { CustomerDataService } from './customer-data.service';

describe('SaveNewCustomerDataService', () => {
  let service: CustomerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
