import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlinkComponent } from './headerlink.component';

describe('HeaderlinkComponent', () => {
  let component: HeaderlinkComponent;
  let fixture: ComponentFixture<HeaderlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderlinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
