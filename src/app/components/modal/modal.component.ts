import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'modal-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  
  subtitle: string = '';
  showProject: boolean = false;
  projectUrl?: string | undefined;
  showGit: boolean = false;
  gitUrl?: string | undefined;
  content: any;
  imgUrl: string = '';
  name: string = '';
  tags: string[] = [];
  bubbleType: string = '';

  html?: SafeHtml = ''

  @Input() public showModal = false;
  @Input() public id : string = '';
  @Input() public informations: any = {};
  @Output() public closeModal = new EventEmitter();

  constructor(private sanitizer: DomSanitizer){
    // console.log(this.informations);
    // this.html = this.sanitizer.bypassSecurityTrustHtml(this?.informations.moreInformations.html);
  }

  public handleSanitizeHTML(html: string){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public handleCloseModal(){
    return this.closeModal.emit(false);
  };
  
}
