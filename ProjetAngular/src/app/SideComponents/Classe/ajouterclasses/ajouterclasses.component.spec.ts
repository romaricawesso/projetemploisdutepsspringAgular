import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterclassesComponent } from './ajouterclasses.component';

describe('AjouterclassesComponent', () => {
  let component: AjouterclassesComponent;
  let fixture: ComponentFixture<AjouterclassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterclassesComponent]
    });
    fixture = TestBed.createComponent(AjouterclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
