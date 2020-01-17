import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCamperFormComponent } from './new-camper-form.component';

describe('NewCamperFormComponent', () => {
  let component: NewCamperFormComponent;
  let fixture: ComponentFixture<NewCamperFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCamperFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCamperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
