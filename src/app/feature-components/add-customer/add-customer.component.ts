import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerDataService } from '@shared/services';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent {
  newCustomerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    contactNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  //TODO: add birth date, contant number and email pattern validations

  constructor(
    private saveCustomerService: CustomerDataService,
    private router: Router
  ) {}

  addNewCustomer(): void {
    if (this.newCustomerForm.valid) {
      this.saveCustomerService
        .saveCustomerData(this.newCustomerForm.value)
        .pipe(take(1))
        .subscribe();

      this.saveCustomerService.getCustomerData();
      this.router.navigate(['/customers-table']);
    }
  }
}
