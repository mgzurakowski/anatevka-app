import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaysListService } from 'src/app/features/days/days-list/services/days-list.service';

import { DaysListComponent } from './days-list.component';

describe('DaysListComponent', () => {
  let component: DaysListComponent;
  let fixture: ComponentFixture<DaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysListComponent ],
      providers: [DaysListService]
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
