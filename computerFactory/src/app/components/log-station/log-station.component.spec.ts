import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogStationComponent } from './log-station.component';

describe('LogStationComponent', () => {
  let component: LogStationComponent;
  let fixture: ComponentFixture<LogStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
