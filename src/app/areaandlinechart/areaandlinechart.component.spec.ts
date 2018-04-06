import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaandlinechartComponent } from './areaandlinechart.component';

describe('AreaandlinechartComponent', () => {
  let component: AreaandlinechartComponent;
  let fixture: ComponentFixture<AreaandlinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaandlinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaandlinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
