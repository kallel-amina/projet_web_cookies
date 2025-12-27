import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    formType = 'comment';

  submitForm(formValue: any) {
    console.log('Contact form submitted:', formValue);
    alert('Thank you for your message 💌');
  }
}
