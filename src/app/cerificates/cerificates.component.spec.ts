import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerificatesComponent } from './cerificates.component';

describe('CerificatesComponent', () => {
  let component: CerificatesComponent;
  let fixture: ComponentFixture<CerificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerificatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CerificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
