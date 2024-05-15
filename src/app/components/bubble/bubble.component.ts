import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curriculum } from '../../interfaces/curriculum.interface';
import { AnimationsService } from '../../services/animation.service';

@Component({
  selector: 'bubble-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.css',
  providers: [AnimationsService]
})
export class BubbleComponent implements OnInit {
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
  @Output() public openModal = new EventEmitter();

  public handleShowModal(item:Curriculum){
    return this.openModal.emit(item);
  }

  constructor(private animationsService: AnimationsService){}

  ngOnInit(): void {
    this.animationsService.handleGetElements();
  }
}
