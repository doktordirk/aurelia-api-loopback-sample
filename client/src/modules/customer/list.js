import { inject } from 'aurelia-framework';
import { Customers } from './customers';
import { Router } from 'aurelia-router';

@inject(Customers, Router)
export class List {
  heading = 'Customer management';

  customerList = [];

  constructor(customers, router) {
    this.customers = customers;
    this.router = router;
  }

  gotoCustomer(customer) {
    this.router.navigateToRoute('edit', {id: customer.id});
  }

  new() {
    this.router.navigateToRoute('create');
  }

  activate() {
    return this.customers.getAll()
      .then(customerList => this.customerList = customerList);
  }
}
