import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '@shared/services/types';

@Component({
  selector: 'app-customer-data-preview-modal',
  templateUrl: './customer-data-preview-modal.component.html',
})
export class CustomerDataPreviewModalComponent {
  customer: Customer;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Customer) {
    this.customer = this.data;
  }
}
