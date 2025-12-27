import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    formType = 'comment';
  constructor(private contactService: ContactService) {}

  
  submitForm(formData: any) {
  this.contactService.sendMessage(formData).subscribe({
    next: () => alert('Thank you for your message 💌'),
    error: () => alert('Something went wrong 😢')
  });
}
}
