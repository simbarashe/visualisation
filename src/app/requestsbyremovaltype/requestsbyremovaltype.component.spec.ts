import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsbyremovaltypeComponent } from './requestsbyremovaltype.component';

describe('RequestsbyremovaltypeComponent', () => {
  let component: RequestsbyremovaltypeComponent;
  let fixture: ComponentFixture<RequestsbyremovaltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsbyremovaltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsbyremovaltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
