import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermatieresComponent } from './modifiermatieres.component';

describe('ModifiermatieresComponent', () => {
  let component: ModifiermatieresComponent;
  let fixture: ComponentFixture<ModifiermatieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiermatieresComponent]
    });
    fixture = TestBed.createComponent(ModifiermatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
