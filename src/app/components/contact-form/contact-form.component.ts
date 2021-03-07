import { OnChanges, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnChanges {

  contact: Contact = new Contact();

  contacts = []

  contactForm: Contact = {
    id: 2,
    firstname: '',
    lastname: '',
    phone: null,
    address: '',
    email: '',
  }
  @Input() contactID: number;

  constructor(public contactService: ContactService) {
    this.contactID = 0;
  }

  ngOnChanges() {
    if (this.contactID > 0) {
      let contactDetails = this.contactService.getContactDetails(this.contactID);
      Object.assign(this.contact, contactDetails);
    }
  }

  ngOnInit(): void {
    //this.contacts = this.contactService.Contacts;
  }

  addContact(contactForm: NgForm) {
    if (contactForm.valid) {
      if (this.contactID > 0) this.contactService.updateContact(this.contact);
      else this.contactService.addContact(this.contact);
      this.clearform();
    }
  }

  clearform() {
    this.contact = new Contact();
    this.contactID = 0
  }

}


// let contactDetails = this.contactService.getContactDetails(this.contactID);
    // Object.assign(contactDetails, this.contact)
    // this.contactService.addContact(contactDetails)

    // let result = this.contacts.map(a => a.id)
    //   if(result.includes(this.contactID) === false){
    //     this.contactService.addContact(contactForm.value);
    //     this.contactForm.id++;
    //     }
    // else {
    //   Object.assign(this.contact, this.contactForm)
    //   }
    // contactForm.reset()


