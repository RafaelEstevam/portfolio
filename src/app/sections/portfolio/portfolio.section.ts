import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Curriculum } from '../../interfaces/curriculum.interface';
import { Apollo } from 'apollo-angular';
import { GET_portfolios } from '../../queries/portfolio.query';
import { BubbleComponent } from '../../components/bubble/bubble.component';
import { AnimationsService } from '../../services/animation.service';

@Component({
  selector: 'portfolio-section',
  standalone: true,
  imports: [BubbleComponent],
  templateUrl: './portfolio.section.html',
  styleUrl: './portfolio.section.css',
  providers: [AnimationsService]
})
export class PortfolioSection implements OnInit {
  public portfolios: Curriculum[] = [];
  @Output() openModal = new EventEmitter<any>();

  loadPortfolios(){  
    this.apollo.watchQuery({
      query: GET_portfolios
    }).valueChanges.subscribe(({data} : any) => {
      this.portfolios = data.portfolios;
      this.animationsService.handleGetElements();
    })
  }

  handleOpenModal({id, type}: any){
    this.openModal.emit({id, type});
  }

  constructor(private apollo: Apollo, private animationsService: AnimationsService){}

  ngOnInit(): void {
    this.loadPortfolios();
  }
}
