import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbasicComponent } from './taskbasic.component';

describe('TaskbasicComponent', () => {
  let component: TaskbasicComponent;
  let fixture: ComponentFixture<TaskbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskbasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
