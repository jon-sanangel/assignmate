import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TApiTask, Items } from '../utils/models/data-types';

@Injectable({
  providedIn: 'root'
})
export class AssignmateApiService {

  constructor(private http: HttpClient) { }

  public getTasks(){
    return this.http.get<TApiTask>('./assets/mock-data.json');
  }
}
