import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { TaskListComponent } from './dashboard/task-list/task-list.component';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskStatsComponent } from './dashboard/task-stats/task-stats.component';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    DashboardComponent,
    TaskStatsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
