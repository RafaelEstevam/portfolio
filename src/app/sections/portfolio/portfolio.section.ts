import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Curriculum } from '../../interfaces/curriculum.interface';
import { Apollo } from 'apollo-angular';
import { GET_portfolios, GET_portfolio_by_id } from '../../queries/portfolio.query';
import { BubbleComponent } from '../../components/bubble/bubble.component';

@Component({
  selector: 'portfolio-section',
  standalone: true,
  imports: [BubbleComponent],
  templateUrl: './portfolio.section.html',
  styleUrl: './portfolio.section.css'
})
export class PortfolioSection implements OnInit {
  public portfolios: Curriculum[] = [];
  @Output() openModal = new EventEmitter<any>();

  loadPortfolios(){  
    this.apollo.watchQuery({
      query: GET_portfolios
    }).valueChanges.subscribe(({data, error} : any) => {
      this.portfolios = data.portfolios;
    })
  }

  loadPortfolioById(id:string){
    this.apollo.watchQuery({
      query: GET_portfolio_by_id(id)
    }).valueChanges.subscribe(({data, error} : any) => {
      // this.modalInformations.set(data.portfolio);
    })
  }

  handleOpenModal({id, type}: any){
    this.openModal.emit({id, type});
  }

  constructor(private apollo: Apollo){}

  ngOnInit(): void {
    this.loadPortfolios();
  }
}
