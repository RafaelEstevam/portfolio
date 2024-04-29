import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { Portfolio } from '../../interfaces/portfolio.interface';
import { BubbleComponent } from '../../components/bubble/bubble.component';
import { CurriculumComponent } from '../../components/curriculum/curriculum.component';
import { Curriculum } from '../../interfaces/curriculum.interface';
import { CompaniesService } from '../../services/companies.service';

import { Apollo } from 'apollo-angular';
import { GET_companies, GET_company_by_id } from '../../queries/companies.query';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ModalComponent,
    BubbleComponent,
    CurriculumComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [CompaniesService]
})
export class HomeComponent implements OnInit {

  public showModal = signal<boolean>(false);
  public modalId = signal<string>('');
  public modalInformations = signal<any>({})

  error: any;
  loading : boolean = false;

  public portfolio: Portfolio[] = [
    {id: '1', name: 'Wizard', tags: ['wordpress'], bubbleType: 'blob-animation-1'},
    {id: '2', name: 'Marvel API', tags: ['react', 'javascript', 'API'], bubbleType: 'blob-animation-2'},
    {id: '3', name: 'Recados.IO', tags: ['vue', 'typescript', 'AI', 'websockets'], bubbleType: 'blob-animation-3'},
    {id: '4', name: 'Blog', tags: ['nextjs', 'typescript', 'graphQl'], bubbleType: 'blob-animation-1'},
  ];

  public graduation: Curriculum[] = [];
  public carreer: Curriculum[] = [
    // {id: '2', companyName: 'Printi', shortDescription: 'Suporte e manutenção de e-commerce com ReactJS, Next e etc.', startDate: '06-2023', name: 'Desenvolvedor Front-end', endDate: ''},
    // {id: '3', companyName: 'FITec', shortDescription: 'Desenvolvimento de front-end para aplicação de CRM com ReactJS, Next e etc.', startDate: '02-2021', name: 'Desenvolvedor Front-end', endDate: '06-2023'},
    // {id: '4', companyName: 'Gauge', shortDescription: 'Desenvolvimento de front-end para aplicação de gestão de manutenção de aeronaves com ReactJS.', startDate: '02-2019', name: 'Desenvolvedor Front-end', endDate: '02-2021'},
    // {id: '5', companyName: 'Univalle', shortDescription: 'Desenvolvimento de front-end para aplicação de emissão de nota fiscal com AngularJS.', startDate: '01-2017', name: 'Desenvolvedor Front-end', endDate: '02-2019'},
    // {id: '6', companyName: 'Estevam Design', shortDescription: 'Desenvolvimento fullstack de projetos feitos como freelancer, usando desde Wordpress a React e Next.', startDate: '06-2015', name: 'Desenvolvedor Fullstack', endDate: ''},
  ];

  public companies: any = [];

  handleFindCompany(){

  }

  handleOpenModal({id, type}: any){
    this.showModal.set(true);
    
    if(type === 'company'){
      this.loadCompany(id);
    }
    // this.modalName.set(item.name);
    // this.modalId.set(item.id);
  }

  handleCloseModal(value:any){
    this.showModal.set(false);
  }

  loadCompanies(){  
    this.apollo.watchQuery({
      query: GET_companies
    }).valueChanges.subscribe(({data, error} : any) => {
      this.companies = data.companies;
    })
  }

  loadCompany(id:string){  
    this.apollo.watchQuery({
      query: GET_company_by_id(id)
    }).valueChanges.subscribe(({data, error} : any) => {
      this.modalInformations.set(data.company);
      console.log(this.modalInformations())
    })
  }

  constructor(private apollo : Apollo){}
  
  ngOnInit(): void {
    this.loadCompanies();
  }

  // constructor(){
  //   effect(()=> {
  //     console.log(this.modalName());
  //   })
  // }

}
