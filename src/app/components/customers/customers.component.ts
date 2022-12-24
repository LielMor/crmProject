import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { AddCustomersComponent } from '../add-customers/add-customers.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { ShowCustomerComponent } from '../show-customer/show-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  constructor(private modal: NgbModal, private c: CustomersService) {}

  ngOnInit(): void {
    this.c.getAll().subscribe((data) => (this.customers = data));
  }

  addForm() {
    this.modal.open(AddCustomersComponent, { size: 'lg', centered: true });
  }
  editForm(customer: Customer) {
    const modalRef = this.modal.open(EditCustomerComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.id = customer.id;
  }
  showForm(customer: Customer) {
    const modalRef = this.modal.open(ShowCustomerComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.id = customer.id;
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.c.deleteCustomer(customer);
    }
  }
}
