import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() public label: string = '';
  @Input() public action!: void;

  handleAction(){

    console.log('teste');

    // console.log(this.action && this.action);

    // this.action && this.action();
  }

}
