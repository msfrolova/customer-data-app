import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerDataTableComponent } from 'app/feature-components/customer-data-table/customer-data-table/customer-data-table.component';
import { PageNotFoundComponent } from 'app/core-components/page-not-found/page-not-found.component';
import { AddCustomerComponent } from 'app/feature-components/add-customer/add-customer.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'customers-table',
        component: CustomerDataTableComponent,
      },
      { path: 'add-customer', component: AddCustomerComponent },
      {
        path: '',
        redirectTo: 'customers-table',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
