import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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
import { AnimationsService } from '../../services/animation.service';

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
  styleUrl: './home.section.css',
  providers: [AnimationsService]
})
export class HomeSection implements OnInit {

  public showModal = signal<boolean>(false);
  public modalId = signal<string>('');
  public modalInformations = signal<any>({});

  error: any;
  loading: boolean = false;

  handleOpenModal({ id, type }: any) {
    this.showModal.set(true);
    if (type === 'company') {
      this.loadCompanyById(id);
    }
    if (type === 'portfolio') {
      this.loadPortfolioById(id);
    }
  }

  handleCloseModal(value: any) {
    this.showModal.set(false);
  }

  loadCompanyById(id: string) {
    this.apollo.watchQuery({
      query: GET_company_by_id(id)
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.modalInformations.set(data.company);
    })
  }

  loadPortfolioById(id: string) {
    this.apollo.watchQuery({
      query: GET_portfolio_by_id(id)
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.modalInformations.set(data.portfolio);
    })
  }

  constructor(private apollo: Apollo, private animationsService: AnimationsService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animationsService.handleGetElements();
    }
  }
}
