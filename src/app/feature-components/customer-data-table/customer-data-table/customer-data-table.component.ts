import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDataService } from '@shared/services';
import { Customer } from '@shared/services/types';
import { CustomerDataPreviewModalComponent } from 'app/feature-components/customer-data-preview-modal/customer-data-preview-modal.component';

@Component({
  selector: 'app-customer-data-table',
  templateUrl: './customer-data-table.component.html',
  styleUrls: ['./customer-data-table.component.scss'],
})
export class CustomerDataTableComponent implements OnInit {
  customers: Customer[];
  tableColumns = ['name', 'surname', 'birthDate', 'contactNumber', 'email'];
  searchText = '';

  constructor(
    private fetchCustomerData: CustomerDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchCustomerData.getCustomerData().subscribe((customers) => {
      if (customers) {
        this.customers = customers;
      }
    });
  }

  onRowClick(customerData: Customer): void {
    this.dialog.open(CustomerDataPreviewModalComponent, {
      width: '500px',
      data: customerData,
    });
  }
}
