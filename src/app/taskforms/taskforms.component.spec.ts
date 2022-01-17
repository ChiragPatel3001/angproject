import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskformsComponent } from './taskforms.component';

describe('TaskformsComponent', () => {
  let component: TaskformsComponent;
  let fixture: ComponentFixture<TaskformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
