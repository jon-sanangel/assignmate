import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, Input, SimpleChanges, ContentChild, ElementRef } from '@angular/core';
import { AssignmateApiService } from '../../../api-services/assignmate-api.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('taskContent') taskContent!: TemplateRef<any>;
  @ViewChild('noTask') noTask!: TemplateRef<any>;

  selectedTask$ = this.AssignmateApiService.selectedTask$;

  constructor(private AssignmateApiService: AssignmateApiService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.taskContent = this.noTask;
  }

  editTask() {
  }

}
