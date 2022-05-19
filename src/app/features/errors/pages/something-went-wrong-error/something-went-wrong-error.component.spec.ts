import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingWentWrongErrorComponent } from './something-went-wrong-error.component';

describe('SomethingWentWrongErrorComponent', () => {
  let component: SomethingWentWrongErrorComponent;
  let fixture: ComponentFixture<SomethingWentWrongErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomethingWentWrongErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingWentWrongErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
