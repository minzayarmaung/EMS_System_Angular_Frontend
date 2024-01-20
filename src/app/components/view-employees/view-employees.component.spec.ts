import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeesComponent } from './view-employees.component';

describe('ViewEmployeesComponent', () => {
  let component: ViewEmployeesComponent;
  let fixture: ComponentFixture<ViewEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployeesComponent]
    });
    fixture = TestBed.createComponent(ViewEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
