import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bubble-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.css'
})
export class BubbleComponent {
  @Input() public item:Portfolio = {id: '', name: '', tags: [], bubbleType: ''};
  @Output() public openModal = new EventEmitter();

  public handleShowModal(item:Portfolio){
    return this.openModal.emit(item);
  }
}
