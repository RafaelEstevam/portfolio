import { Component } from '@angular/core';
import { withViewTransitions } from '@angular/router';

interface Links {
  label: string,
  url: string
};

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public links: Links[] = [
    {label: 'Home', url: '#home'},
    {label: 'Sobre', url: '#about'},
    {label: 'Portfólio', url: '#portfolio'},
    {label: 'Carreira', url: '#carreer'},
    {label: 'Conhecimentos', url: '#skill'},
    {label: 'Contatos', url: '#contact'}
  ]

  constructor(){};

  ngAfterViewChecked(): void {
   
  };

}
