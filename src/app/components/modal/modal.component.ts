import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'modal-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  title: string = 'Wizard';
  subtitle: string = 'Desenvolvimento de novo site da escola de inglês Wizard';
  tags: string = '#wordpress #jquery #html #css #seo';
  teste: string = 'teste';
  showModal: boolean = false;

  // @Input() showModal:boolean = false;
  // @Input() modalName: string = '';

  // @Output() closeModal = new EventEmitter<any>();

  // emitEvent() {
  //   this.closeModal.emit('');
  // }

  // openModal(){
  //   this.showModal = true;
  // };

  // closeModal(){
  //   this.showModal = false;
  // }

  // onMounted(){
  //   console.log('teste');
  //   console.log(this.modalName)
  // }
}
