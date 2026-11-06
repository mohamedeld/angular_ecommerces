import { Component, signal } from '@angular/core';
import { ContactData } from '../../core/types';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-contact-us',
  styleUrl: './contact-us.css',
  templateUrl: './contact-us.html',
})
export default class ContactUs {
  isSubmitted = signal(false);
  contact = signal<ContactData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  contactForm = form(this.contact, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.subject, { message: 'Subject is required' });
    required(schemaPath.message, { message: 'Message is required' });
  });
  onSubmit(event: Event) {
    event.preventDefault();
    const credentials = this.contact();
    console.log('Contact Form:', this.contactForm);

    this.isSubmitted.set(true);
  }
}
