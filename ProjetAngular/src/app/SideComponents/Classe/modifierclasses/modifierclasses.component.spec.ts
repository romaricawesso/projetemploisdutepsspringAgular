import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierclassesComponent } from './modifierclasses.component';

describe('ModifierclassesComponent', () => {
  let component: ModifierclassesComponent;
  let fixture: ComponentFixture<ModifierclassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierclassesComponent]
    });
    fixture = TestBed.createComponent(ModifierclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
