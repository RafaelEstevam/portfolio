import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { BubbleComponent } from '../../components/bubble/bubble.component';
import { CurriculumComponent } from '../../components/curriculum/curriculum.component';
import { BlogComponent } from '../../components/blog/blog.component';

import { Curriculum } from '../../interfaces/curriculum.interface';

import { Apollo } from 'apollo-angular';
import { GET_companies, GET_company_by_id } from '../../queries/companies.query';
import { GET_portfolios, GET_portfolio_by_id } from '../../queries/portfolio.query'
import { GET_tecnologiesLists } from '../../queries/tecnologies.query';
import { PortfolioSection } from '../portfolio/portfolio.section';

@Component({
  selector: 'home-section',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ModalComponent,
    BubbleComponent,
    BlogComponent,
    CurriculumComponent,
    PortfolioSection
  ],
  templateUrl: './home.section.html',
  styleUrl: './home.section.css'
})
export class HomeSection implements OnInit {

  public showModal = signal<boolean>(false);
  public modalId = signal<string>('');
  public modalInformations = signal<any>({});

  error: any;
  loading : boolean = false;

  public carreer: Curriculum[] = [
    // {id: '2', companyName: 'Printi', shortDescription: 'Suporte e manutenção de e-commerce com ReactJS, Next e etc.', startDate: '06-2023', name: 'Desenvolvedor Front-end', endDate: ''},
    // {id: '3', companyName: 'FITec', shortDescription: 'Desenvolvimento de front-end para aplicação de CRM com ReactJS, Next e etc.', startDate: '02-2021', name: 'Desenvolvedor Front-end', endDate: '06-2023'},
    // {id: '4', companyName: 'Gauge', shortDescription: 'Desenvolvimento de front-end para aplicação de gestão de manutenção de aeronaves com ReactJS.', startDate: '02-2019', name: 'Desenvolvedor Front-end', endDate: '02-2021'},
    // {id: '5', companyName: 'Univalle', shortDescription: 'Desenvolvimento de front-end para aplicação de emissão de nota fiscal com AngularJS.', startDate: '01-2017', name: 'Desenvolvedor Front-end', endDate: '02-2019'},
    // {id: '6', companyName: 'Estevam Design', shortDescription: 'Desenvolvimento fullstack de projetos feitos como freelancer, usando desde Wordpress a React e Next.', startDate: '06-2015', name: 'Desenvolvedor Fullstack', endDate: ''},
  ];

  public graduations: Curriculum[] = [];
  public companies: Curriculum[] = [];
  public portfolios: Curriculum[] = [];
  public tecnologies: any = [];
  public mainTecnologies: any = [];

  handleFindCompany(){

  }

  handleOpenModal({id, type}: any){
    this.showModal.set(true);
    if(type === 'company'){
      this.loadCompanyById(id);
    }
    if(type === 'portfolio'){
      this.loadPortfolioById(id);
    }
  }

  handleCloseModal(value:any){
    this.showModal.set(false);
  }

  loadCompanies(){  
    this.apollo.watchQuery({
      query: GET_companies
    }).valueChanges.subscribe(({data, error} : any) => {
      this.companies = data.companies.filter((item:Curriculum) => item.isGraduation === false);
      this.graduations = data.companies.filter((item:Curriculum) => item.isGraduation === true);
    })
  }

  loadCompanyById(id:string){  
    this.apollo.watchQuery({
      query: GET_company_by_id(id)
    }).valueChanges.subscribe(({data, error} : any) => {
      this.modalInformations.set(data.company);
    })
  }

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
      this.modalInformations.set(data.portfolio);
    })
  }

  loadTecnologies(){
    this.apollo.watchQuery({
      query: GET_tecnologiesLists
    }).valueChanges.subscribe(({data, error} : any) => {
      this.mainTecnologies = data.tecnologiesLists.filter((item:any) => item.isMain === true);
      this.tecnologies = data.tecnologiesLists.filter((item:any) => item.isMain === false);
    })
  }

  constructor(private apollo : Apollo){}
  
  ngOnInit(): void {
    this.loadCompanies();
    this.loadPortfolios();
    this.loadTecnologies();
  }

  // constructor(){
  //   effect(()=> {
  //     console.log(this.modalName());
  //   })
  // }

}
