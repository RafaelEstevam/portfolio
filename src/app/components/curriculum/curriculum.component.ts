import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curriculum } from '../../interfaces/curriculum.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'curriculum-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent implements OnInit {

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
    categories: []
  }
  @Input() public direction: string = '';
  @Input() public textDirection: string = '';

  @Output() public openModal = new EventEmitter();

  handleOpenModal(item: Curriculum){
    this.openModal.emit(item);
  }

  ngOnInit(): void {
    // console.log(this.item);
  }

}