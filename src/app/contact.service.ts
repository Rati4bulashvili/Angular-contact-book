import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  contact: Contact;
  public contacts: Contact[];

  newContactID: number = 0;

  constructor() {
    this.contacts = [];
  }

  get Contacts() {
    return this.contacts
  }

  addContact(contact: Contact) {
    contact.id = ++this.newContactID;
    this.contacts.push(contact);
    console.log(this.Contacts)
  }

  updateContact(contact: Contact) {
    let contactDetails = this.getContactDetails(contact.id);
    Object.assign(contactDetails, contact);
  }

  deleteContact(id: number) {
    let contact = this.getContactDetails(id);
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  getContactDetails(id: number) {
    let contact = this.contacts.find(x => x.id == id)
    return contact;
  }
}
