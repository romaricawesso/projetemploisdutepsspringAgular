import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteremploisdutempsComponent } from './ajouteremploisdutemps.component';

describe('AjouteremploisdutempsComponent', () => {
  let component: AjouteremploisdutempsComponent;
  let fixture: ComponentFixture<AjouteremploisdutempsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteremploisdutempsComponent]
    });
    fixture = TestBed.createComponent(AjouteremploisdutempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
