import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.section.html',
  styleUrl: './contact.section.css'
})
export class ContactSection {

  public currentDate = new Date();

}
