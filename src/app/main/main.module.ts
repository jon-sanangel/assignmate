import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { TaskListComponent } from './task-tracker/task-list/task-list.component';
import { TaskDetailsComponent } from './task-tracker/task-details/task-details.component';



@NgModule({
  declarations: [
    TaskTrackerComponent,
    TaskListComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
