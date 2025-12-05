import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeanneescolairesComponent } from './listeanneescolaires.component';

describe('ListeanneescolairesComponent', () => {
  let component: ListeanneescolairesComponent;
  let fixture: ComponentFixture<ListeanneescolairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeanneescolairesComponent]
    });
    fixture = TestBed.createComponent(ListeanneescolairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
