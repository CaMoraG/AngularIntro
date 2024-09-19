import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalserviciosComponent } from './principalservicios.component';

describe('PrincipalserviciosComponent', () => {
  let component: PrincipalserviciosComponent;
  let fixture: ComponentFixture<PrincipalserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalserviciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
