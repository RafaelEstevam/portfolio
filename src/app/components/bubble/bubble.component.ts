import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio.interface';
import { CommonModule } from '@angular/common';
import { Curriculum } from '../../interfaces/curriculum.interface';

@Component({
  selector: 'bubble-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.css'
})
export class BubbleComponent {
  @Input() public item:Curriculum = {
    id: '', name: '', categories: [],
    coverImage: {
      fileName: '',
      height: 0,
      url: '',
      width: 0
    },
    logo: {
      fileName: '',
      height: 0,
      url: '',
      width: 0
    },
    moreInformations: {
      html: ''
    },
    companyPage: '',
    links: [],
    startEndDate: {
      endDate: '',
      isCurrent: false,
      startDate: ''
    },
    isGraduation: false
  };
  
  @Input() public bubbleType: string = '';
  @Input() public animation: string = '';
  @Input() public duration: number = 0;
  @Output() public openModal = new EventEmitter();

  public handleShowModal(item:Curriculum){
    return this.openModal.emit(item);
  }
}
