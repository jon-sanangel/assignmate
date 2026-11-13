import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsContentComponent } from './task-details-content.component';

describe('TaskDetailsContentComponent', () => {
  let component: TaskDetailsContentComponent;
  let fixture: ComponentFixture<TaskDetailsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailsContentComponent]
    });
    fixture = TestBed.createComponent(TaskDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
