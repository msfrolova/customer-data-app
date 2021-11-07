import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataTableComponent } from './customer-data-table.component';

describe('CustomerDataTableComponent', () => {
  let component: CustomerDataTableComponent;
  let fixture: ComponentFixture<CustomerDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
