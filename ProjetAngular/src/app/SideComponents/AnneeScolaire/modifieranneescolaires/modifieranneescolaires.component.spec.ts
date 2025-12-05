import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieranneescolairesComponent } from './modifieranneescolaires.component';

describe('ModifieranneescolairesComponent', () => {
  let component: ModifieranneescolairesComponent;
  let fixture: ComponentFixture<ModifieranneescolairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifieranneescolairesComponent]
    });
    fixture = TestBed.createComponent(ModifieranneescolairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
