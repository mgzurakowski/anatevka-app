import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationErrorComponent } from './geolocation-error.component';

describe('GeolocationErrorComponent', () => {
  let component: GeolocationErrorComponent;
  let fixture: ComponentFixture<GeolocationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocationErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
