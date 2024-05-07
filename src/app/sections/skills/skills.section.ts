import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_tecnologiesLists } from '../../queries/tecnologies.query';

@Component({
  selector: 'skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills.section.html',
  styleUrl: './skills.section.css'
})
export class SkillsSection implements OnInit {

  public tecnologies: any = [];
  public mainTecnologies: any = [];

  loadTecnologies(){
    this.apollo.watchQuery({
      query: GET_tecnologiesLists
    }).valueChanges.subscribe(({data, error} : any) => {
      this.mainTecnologies = data.tecnologiesLists.filter((item:any) => item.isMain === true);
      this.tecnologies = data.tecnologiesLists.filter((item:any) => item.isMain === false);
    })
  }

  constructor(private apollo: Apollo){}

  ngOnInit(): void {
    this.loadTecnologies();
  }



}
