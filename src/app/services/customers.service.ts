import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef = collection(this.firestore, 'customers');

  constructor(private firestore: Firestore) {}

  addCustomer(customers: Customer) {
    return addDoc(this.customersRef, customers);
  }

  getAll(): Observable<Customer[]> {
    return collectionData(this.customersRef, { idField: 'id' }) as Observable<
      Customer[]
    >;
  }

  getCustomerById(id: string) {
    const customerRef = doc(this.firestore, `customers/${id}`);
    return docData(customerRef, { idField: 'id' }) as Observable<Customer>;
  }

  updateCustomer(customer: Customer) {
    const customerRef = doc(this.firestore, `customers/${customer.id}`);
    return setDoc(customerRef, customer);
  }

  deleteCustomer(customer: Customer) {
    const customerRef = doc(this.firestore, `customers/${customer.id}`);
    return deleteDoc(customerRef);
  }
}
