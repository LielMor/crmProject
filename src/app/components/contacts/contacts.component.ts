import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: any = [];
  name: string = '';
  constructor(private cs: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.cs.getContacts();
  }
}
