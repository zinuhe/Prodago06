import { Injectable } from '@angular/core';
import { ITask } from './task';

@Injectable({
  providedIn: 'root' // available for injection anywhere
})
export class TaskService {

  getTasks(): ITask[] {
    return [
      {
        taskId: 1,
        priority: 4,
        description: 'desc task 01',
        status: 'status-01',
        dueDate: 'August 01, 2019'
      },
      {
        taskId: 2,
        priority: 3,
        description: 'desc task 02',
        status: 'status-02',
        dueDate: 'August 02, 2019'
      },
      {
        taskId: 3,
        priority: 2,
        description: 'desc task 03',
        status: 'status-03',
        dueDate: 'August 03, 2019'
      },
      {
        taskId: 4,
        priority: 1,
        description: 'desc task 04',
        status: 'status-04',
        dueDate: 'August 03, 2019'
      }
    ];
  }
}
