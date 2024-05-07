import { Component } from '@angular/core';
import { withViewTransitions } from '@angular/router';
import { NetworksComponent } from '../networks/networks.component';
import { CommonModule } from '@angular/common';

interface Links {
  label: string,
  url: string
};

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule, NetworksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public showMenu: boolean = true;

  public links: Links[] = [
    {label: 'Home', url: '#home'},
    {label: 'Sobre', url: '#about'},
    {label: 'Portfólio', url: '#portfolio'},
    {label: 'Carreira', url: '#carreer'},
    {label: 'Conhecimentos', url: '#skill'},
    {label: 'Contatos', url: '#contact'}
  ]

  constructor(){};

  handleShowMenu(){
    this.showMenu = !this.showMenu
  }

  ngAfterViewChecked(): void {
   
  };

}
