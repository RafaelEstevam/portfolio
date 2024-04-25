import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curriculum } from '../../interfaces/curriculum.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'curriculum-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {

  @Input() public item:Curriculum = {
    id: '',
    companyName: '',
    shortDescription: '',
    startDate: '',
    name: '',
    endDate: ''
  }
  @Input() public direction: string = '';
  @Input() public textDirection: string = '';

  @Output() public openModal = new EventEmitter();

  handleOpenModal(item: Curriculum){
    this.openModal.emit(item);
  }

}
