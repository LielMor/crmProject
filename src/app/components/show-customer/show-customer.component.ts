import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css'],
})
export class ShowCustomerComponent implements OnInit {
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };
  @Input() id!: string;
  constructor(private cs: CustomersService, private am: NgbActiveModal) {}

  ngOnInit(): void {
    this.cs
      .getCustomerById(this.id)
      .subscribe((data: Customer) => (this.customer = data));
  }

  closeModal() {
    this.am.close();
  }
}
