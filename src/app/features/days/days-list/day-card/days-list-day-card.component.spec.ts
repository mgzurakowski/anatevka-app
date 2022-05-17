import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysListDayCardComponent } from './days-list-day-card.component';

describe('DaysListDayCardComponent', () => {
  let component: DaysListDayCardComponent;
  let fixture: ComponentFixture<DaysListDayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysListDayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysListDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
