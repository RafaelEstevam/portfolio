import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, signal, Signal, OnInit, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalPortfolio } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'modal-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements ModalPortfolio {

  showProject: boolean = false;
  showGit: boolean = false;
  content: any;
  imgUrl: string = '';
  id: string = '';
  bubbleType: string = 'blob-animation-1';
  subtitle: string = '';
  tags: string[] = [];

  @Input() public showModal = false;
  @Input() public name : string = '';
  @Output() public closeModal = new EventEmitter();

  public handleCloseModal(){
    return this.closeModal.emit(false);
  };

}
