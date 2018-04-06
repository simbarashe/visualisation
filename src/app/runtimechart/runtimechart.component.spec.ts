import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimechartComponent } from './runtimechart.component';

describe('RuntimechartComponent', () => {
  let component: RuntimechartComponent;
  let fixture: ComponentFixture<RuntimechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuntimechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuntimechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
