import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalExternoComponent } from './principal-externo.component';

describe('PrincipalExternoComponent', () => {
  let component: PrincipalExternoComponent;
  let fixture: ComponentFixture<PrincipalExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalExternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
