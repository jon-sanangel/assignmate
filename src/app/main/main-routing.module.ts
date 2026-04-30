import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';

const routes: Routes = [
  {
    path: '',
    component: TaskTrackerComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
