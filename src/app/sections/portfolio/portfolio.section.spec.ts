import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSection } from './portfolio.section';

describe('PortfolioSection', () => {
  let component: PortfolioSection;
  let fixture: ComponentFixture<PortfolioSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSection]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
