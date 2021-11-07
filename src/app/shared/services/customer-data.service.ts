import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Customer } from './types';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerDataService {
  url: string = 'http://localhost:3000/customers/';

  constructor(private http: HttpClient) {}

  saveCustomerData(customer: Customer): Observable<Customer> {
    return this.http
      .post<Customer>(this.url, customer)
      .pipe(catchError(this.handleError));
  }

  getCustomerData(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      'Sorry, our services does not work right now, please try that later'
    );
  }
}
