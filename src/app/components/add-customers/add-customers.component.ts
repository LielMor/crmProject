import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css'],
})
export class AddCustomersComponent implements OnInit {
  customer: Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  };

  constructor(private cs: CustomersService, private am: NgbActiveModal) {}

  ngOnInit(): void {}

  onSubmit() {
    this.cs.addCustomer(this.customer).then(() => this.am.close());
  }
}
