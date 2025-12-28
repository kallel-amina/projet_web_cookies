import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
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
