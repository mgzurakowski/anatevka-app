import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysListComponent } from './days-list.component';

describe('DaysListComponent', () => {
  let component: DaysListComponent;
  let fixture: ComponentFixture<DaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
