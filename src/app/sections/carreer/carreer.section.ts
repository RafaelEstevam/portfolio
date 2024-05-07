import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Curriculum } from '../../interfaces/curriculum.interface';
import { Apollo } from 'apollo-angular';
import { GET_companies } from '../../queries/companies.query';
import { CurriculumComponent } from '../../components/curriculum/curriculum.component';

@Component({
  selector: 'carreer-section',
  standalone: true,
  imports: [CurriculumComponent],
  templateUrl: './carreer.section.html',
  styleUrl: './carreer.section.css'
})
export class CarreerSection implements OnInit {
  public graduations: Curriculum[] = [];
  public companies: Curriculum[] = [];

  @Output() openModal = new EventEmitter<any>();

  handleOpenModal({id, type}: any){
    this.openModal.emit({id, type});
  }

  loadCompanies(){  
    this.apollo.watchQuery({
      query: GET_companies
    }).valueChanges.subscribe(({data, error} : any) => {
      this.companies = data.companies.filter((item:Curriculum) => item.isGraduation === false);
      this.graduations = data.companies.filter((item:Curriculum) => item.isGraduation === true);
    })
  }

  constructor(private apollo: Apollo){}

  ngOnInit(): void {
    this.loadCompanies();
  }
}
