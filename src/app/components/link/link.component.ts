import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'link-component',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() public label: string = '';
  @Input() public url: string = '';
  @Input() public target: string = '';
}
