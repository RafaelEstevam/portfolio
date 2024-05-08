import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../components/link/link.component';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './contact.section.html',
  styleUrl: './contact.section.css'
})
export class ContactSection {

  public currentDate = new Date();

}
