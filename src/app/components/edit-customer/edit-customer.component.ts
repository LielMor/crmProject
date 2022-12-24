import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  customer: Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  };

  @Input() id?: string;

  constructor(private cs: CustomersService, private am: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.id) {
      this.cs
        .getCustomerById(this.id)
        .subscribe((data: Customer) => (this.customer = data));
    }
  }

  onSubmit() {
    this.cs
      .updateCustomer(this.customer)
      .then(() => {
        this.am.close();
      })
      .catch((err) => console.log(err));
  }
}
