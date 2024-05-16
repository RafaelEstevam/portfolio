import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_tecnologiesLists } from '../../queries/tecnologies.query';
import { AnimationsService } from '../../services/animation.service';

@Component({
  selector: 'skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills.section.html',
  styleUrl: './skills.section.css',
  providers: [AnimationsService]
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
      this.animationsService.handleGetElements();
    })
  }

  constructor(private apollo: Apollo, private animationsService: AnimationsService){}

  ngOnInit(): void {
    this.loadTecnologies();
  }
}
