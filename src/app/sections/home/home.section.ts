import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { ModalComponent } from '../../components/modal/modal.component';

import { Apollo } from 'apollo-angular';
import { GET_company_by_id } from '../../queries/companies.query';
import { GET_portfolio_by_id } from '../../queries/portfolio.query';
import { PortfolioSection } from '../portfolio/portfolio.section';
import { CarreerSection } from '../carreer/carreer.section';
import { SkillsSection } from '../skills/skills.section';
import { BlogSection } from '../blog/blog.section';
import { ContactSection } from '../contact/contact.section';

@Component({
  selector: 'home-section',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ModalComponent,
    BlogSection,
    PortfolioSection,
    CarreerSection,
    SkillsSection,
    ContactSection
  ],
  templateUrl: './home.section.html',
  styleUrl: './home.section.css'
})
export class HomeSection {

  public showModal = signal<boolean>(false);
  public modalId = signal<string>('');
  public modalInformations = signal<any>({});

  error: any;
  loading : boolean = false;

  // public carreer: Curriculum[] = [
  //   // {id: '2', companyName: 'Printi', shortDescription: 'Suporte e manutenção de e-commerce com ReactJS, Next e etc.', startDate: '06-2023', name: 'Desenvolvedor Front-end', endDate: ''},
  //   // {id: '3', companyName: 'FITec', shortDescription: 'Desenvolvimento de front-end para aplicação de CRM com ReactJS, Next e etc.', startDate: '02-2021', name: 'Desenvolvedor Front-end', endDate: '06-2023'},
  //   // {id: '4', companyName: 'Gauge', shortDescription: 'Desenvolvimento de front-end para aplicação de gestão de manutenção de aeronaves com ReactJS.', startDate: '02-2019', name: 'Desenvolvedor Front-end', endDate: '02-2021'},
  //   // {id: '5', companyName: 'Univalle', shortDescription: 'Desenvolvimento de front-end para aplicação de emissão de nota fiscal com AngularJS.', startDate: '01-2017', name: 'Desenvolvedor Front-end', endDate: '02-2019'},
  //   // {id: '6', companyName: 'Estevam Design', shortDescription: 'Desenvolvimento fullstack de projetos feitos como freelancer, usando desde Wordpress a React e Next.', startDate: '06-2015', name: 'Desenvolvedor Fullstack', endDate: ''},
  // ];

  // public graduations: Curriculum[] = [];
  // public companies: Curriculum[] = [];
  // public tecnologies: any = [];
  // public mainTecnologies: any = [];

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

  loadCompanyById(id:string){  
    this.apollo.watchQuery({
      query: GET_company_by_id(id)
    }).valueChanges.subscribe(({data, error} : any) => {
      this.modalInformations.set(data.company);
    })
  }

  loadPortfolioById(id:string){
    this.apollo.watchQuery({
      query: GET_portfolio_by_id(id)
    }).valueChanges.subscribe(({data, error} : any) => {
      this.modalInformations.set(data.portfolio);
    })
  }

  constructor(private apollo : Apollo){}
}
