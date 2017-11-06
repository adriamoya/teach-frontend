import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignaturesUpdateDeleteComponent } from './assignatures-update-delete.component';

describe('AssignaturesUpdateDeleteComponent', () => {
  let component: AssignaturesUpdateDeleteComponent;
  let fixture: ComponentFixture<AssignaturesUpdateDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignaturesUpdateDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignaturesUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
