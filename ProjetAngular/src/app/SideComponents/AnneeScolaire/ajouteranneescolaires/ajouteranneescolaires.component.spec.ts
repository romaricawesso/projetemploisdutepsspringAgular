import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteranneescolairesComponent } from './ajouteranneescolaires.component';

describe('AjouteranneescolairesComponent', () => {
  let component: AjouteranneescolairesComponent;
  let fixture: ComponentFixture<AjouteranneescolairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteranneescolairesComponent]
    });
    fixture = TestBed.createComponent(AjouteranneescolairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
