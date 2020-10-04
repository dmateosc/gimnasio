import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleComponent } from './muscle.component';

describe('MuscleComponent', () => {
  let component: MuscleComponent;
  let fixture: ComponentFixture<MuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
