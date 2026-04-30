import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/utils/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksMockApiService {

  constructor(private http: HttpClient) { }
}
