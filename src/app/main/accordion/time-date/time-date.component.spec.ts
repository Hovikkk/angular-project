import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDateComponent } from './time-date.component';

describe('TimeDateComponent', () => {
  let component: TimeDateComponent;
  let fixture: ComponentFixture<TimeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
