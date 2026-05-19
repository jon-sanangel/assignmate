import { Component, OnInit } from '@angular/core';
import { AssignmateApiService } from 'src/app/api-services/assignmate-api.service';
import { TApiTask } from 'src/app/utils/models/data-types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList!: TApiTask;

  constructor(private AssignmateApiService: AssignmateApiService) { }

  ngOnInit(): void {
    this.AssignmateApiService.getTasks().subscribe(
      response => {
        console.log(response);
        this.taskList = response;
      }
    )
  }

}
