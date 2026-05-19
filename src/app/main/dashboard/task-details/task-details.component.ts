import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('taskContent') taskContent!: TemplateRef<any>;
  @ViewChild('noTask') noTask!: TemplateRef<any>;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.taskContent = this.noTask;
  }

}
