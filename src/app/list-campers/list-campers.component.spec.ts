import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampersComponent } from './list-campers.component';

describe('ListCampersComponent', () => {
  let component: ListCampersComponent;
  let fixture: ComponentFixture<ListCampersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCampersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
