import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-component',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
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
