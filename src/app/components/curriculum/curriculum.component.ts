import { Component, EventEmitter, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { Curriculum } from '../../interfaces/curriculum.interface';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { AnimationsService } from '../../services/animation.service';

@Component({
  selector: 'curriculum-component',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
  
})
export class CurriculumComponent {

  @Input() public item:Curriculum = {
    id: '',
    name: '',
    companyPage: '',
    links: [],
    logo: {
      fileName: '',
      height: 0,
      width: 0,
      url: ''
    },
    moreInformations: {
      html: ''
    },
    resume: {
      name: '',
      description: ''
    },
    startEndDate: {
      startDate: '',
      endDate: '',
      isCurrent: false
    },
    categories: [],
    isGraduation: false
  }
  @Input() public direction: string = '';
  @Input() public textDirection: string = '';

  @Output() public openModal = new EventEmitter();

  constructor(private animationsService: AnimationsService){}

  ngOnInit(): void {
    this.animationsService.handleGetElements();
  }
  
  handleOpenModal(item: Curriculum){
    this.openModal.emit(item);
  }
}
