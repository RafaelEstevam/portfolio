import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { AnimationsService } from '../../services/animation.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'headerlink-component',
  standalone: true,
  imports: [],
  templateUrl: './headerlink.component.html',
  styleUrl: './headerlink.component.css'
})
export class HeaderlinkComponent implements OnInit {
  
  @Input() public label: string = '';
  @Input() public url: string = '';

  constructor(private animationsService: AnimationsService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animationsService.handleGetElements();
    }
  }
  
}
