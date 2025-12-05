import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieremploisdutempsComponent } from './modifieremploisdutemps.component';

describe('ModifieremploisdutempsComponent', () => {
  let component: ModifieremploisdutempsComponent;
  let fixture: ComponentFixture<ModifieremploisdutempsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifieremploisdutempsComponent]
    });
    fixture = TestBed.createComponent(ModifieremploisdutempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
