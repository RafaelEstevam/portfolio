import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Links } from '../../interfaces/curriculum.interface';

@Component({
  selector: 'modal-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() public showModal = false;
  @Input() public id : string = '';
  @Input() public informations: any = {};
  @Output() public closeModal = new EventEmitter();

  constructor(private sanitizer: DomSanitizer){}

  public handleSanitizeHTML(html: string){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public handleCloseModal(){
    return this.closeModal.emit(false);
  };
  
}
