import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../components/link/link.component';
import { AnimationsService } from '../../services/animation.service';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  templateUrl: './contact.section.html',
  styleUrl: './contact.section.css'
})
export class ContactSection implements OnInit{

  public currentDate = new Date();

  constructor(private animationsService: AnimationsService){}
  
  ngOnInit(): void {
    this.animationsService.handleGetElements()
  }

}
