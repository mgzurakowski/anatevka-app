import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTileComponent } from './today-tile.component';

describe('TodayTileComponent', () => {
  let component: TodayTileComponent;
  let fixture: ComponentFixture<TodayTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
