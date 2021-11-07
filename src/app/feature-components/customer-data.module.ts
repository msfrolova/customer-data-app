import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDataTableComponent } from './customer-data-table/customer-data-table/customer-data-table.component';
import { CoreComponentsModule } from 'app/core-components/core-components.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerDataPreviewModalComponent } from './customer-data-preview-modal/customer-data-preview-modal.component';
import { FilterPipe } from '@shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    CustomerDataTableComponent,
    AddCustomerComponent,
    CustomerDataPreviewModalComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    CoreComponentsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [CustomerDataTableComponent],
})
export class CustomerDataModule {}
