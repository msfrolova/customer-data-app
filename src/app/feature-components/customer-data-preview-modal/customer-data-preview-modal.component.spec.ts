import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataPreviewModalComponent } from './customer-data-preview-modal.component';

describe('CustomerDataPreviewModalComponent', () => {
  let component: CustomerDataPreviewModalComponent;
  let fixture: ComponentFixture<CustomerDataPreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDataPreviewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
