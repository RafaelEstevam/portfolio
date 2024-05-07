import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreerSection } from './carreer.section';

describe('CarreerSection', () => {
  let component: CarreerSection;
  let fixture: ComponentFixture<CarreerSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreerSection]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarreerSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
