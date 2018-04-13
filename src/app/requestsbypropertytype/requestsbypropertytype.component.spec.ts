import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsbypropertytypeComponent } from './requestsbypropertytype.component';

describe('RequestsbypropertytypeComponent', () => {
  let component: RequestsbypropertytypeComponent;
  let fixture: ComponentFixture<RequestsbypropertytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsbypropertytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsbypropertytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
