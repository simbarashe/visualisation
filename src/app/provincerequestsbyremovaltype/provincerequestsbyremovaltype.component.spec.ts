import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincerequestsbyremovaltypeComponent } from './provincerequestsbyremovaltype.component';

describe('ProvincerequestsbyremovaltypeComponent', () => {
  let component: ProvincerequestsbyremovaltypeComponent;
  let fixture: ComponentFixture<ProvincerequestsbyremovaltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincerequestsbyremovaltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincerequestsbyremovaltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
