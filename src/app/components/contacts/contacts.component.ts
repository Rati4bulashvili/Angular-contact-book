import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = []
  @Input() contactID: number;

  // @Output() contactEvent = new EventEmitter<Contact>();
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.Contacts;
  }

  editCurrentContact(id: number) {
    this.contactID = id;
    console.log(this.contactID);
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
  }

}
