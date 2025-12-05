import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermatieresComponent } from './ajoutermatieres.component';

describe('AjoutermatieresComponent', () => {
  let component: AjoutermatieresComponent;
  let fixture: ComponentFixture<AjoutermatieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutermatieresComponent]
    });
    fixture = TestBed.createComponent(AjoutermatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
