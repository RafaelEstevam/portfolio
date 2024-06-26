import { CommonModule, NgOptimizedImage, registerLocaleData } from '@angular/common';
import { Component, Input, Output, EventEmitter, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { LinkComponent } from '../link/link.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'modal-component',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage, LinkComponent, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
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

  public handleShowCenter(height: number){
    return height < 1000
  }
  
}
