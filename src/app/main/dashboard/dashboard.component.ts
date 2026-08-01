import { Component, ViewChild } from '@angular/core';
import { TaskDetailsComponent } from './task-details/task-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild(TaskDetailsComponent) taskDetails!: TaskDetailsComponent

  addNewTask() {
    this.taskDetails.editTask();
  }
}
