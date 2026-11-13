import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { TApiTask } from '../utils/models/data-types';
import { taskDetails } from '../shared/dto/task-details';

@Injectable({
  providedIn: 'root'
})
export class AssignmateApiService {

  private selectedTaskSubject = new BehaviorSubject<taskDetails | null>(null);
  selectedTask$ = this.selectedTaskSubject.asObservable();
  
  constructor(private http: HttpClient) { }

  public getTasks(){
    return this.http.get<TApiTask>('./assets/mock-data.json');
  }

  setSelectedTask(task: taskDetails) {
    this.selectedTaskSubject.next(task);
  }
}
