import { Component, OnInit } from '@angular/core';
import { AssignmateApiService } from 'src/app/api-services/assignmate-api.service';
import { taskDetails } from 'src/app/shared/dto/task-details';

@Component({
  selector: 'app-task-details-content',
  templateUrl: './task-details-content.component.html',
  styleUrls: ['./task-details-content.component.scss']
})
export class TaskDetailsContentComponent implements OnInit {

  public selectedTask!: taskDetails | null;

  constructor(private AssignmentApiService: AssignmateApiService) { }

  ngOnInit(): void {
    this.AssignmentApiService.selectedTask$.subscribe(
      task => {
        this.selectedTask = task;
        console.log(task);
      }
    )
  }
}
