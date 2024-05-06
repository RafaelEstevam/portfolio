import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-component',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() public label: string = '';
  @Output() action = new EventEmitter<void>();

  handleAction(){
    this.action.emit();
  }

}
