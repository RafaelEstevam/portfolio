import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NetworksComponent } from '../networks/networks.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AnimationsService } from '../../services/animation.service';
import { HeaderlinkComponent } from '../headerlink/headerlink.component';

interface Links {
  label: string,
  url: string
};

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule, NetworksComponent, HeaderlinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ AnimationsService ]
})
export class HeaderComponent implements OnInit {

  public showMenu: boolean = false;

  public links: Links[] = [
    {label: 'Home', url: '#home'},
    {label: 'Sobre', url: '#about'},
    {label: 'Portfólio', url: '#portfolio'},
    {label: 'Carreira', url: '#carreer'},
    {label: 'Conhecimentos', url: '#skill'},
    {label: 'Contatos', url: '#contact'}
  ]

  constructor(private animationsService: AnimationsService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      
      this.animationsService.handleGetElements();
    }
  }

  handleShowMenu(){
    this.showMenu = !this.showMenu
  }
}
