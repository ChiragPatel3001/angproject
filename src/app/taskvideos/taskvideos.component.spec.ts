import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskvideosComponent } from './taskvideos.component';

describe('TaskvideosComponent', () => {
  let component: TaskvideosComponent;
  let fixture: ComponentFixture<TaskvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
