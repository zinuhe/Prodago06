import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { ITask } from './task'; // Task interface
import { faPlusCircle, faEdit, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  pageTitle = 'Task';
  tasksList: ITask[] = [];

  // icons font awesome
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  faMinusCircle = faMinusCircle;

  ngOnInit() {
    this.tasksList = this.taskService.getTasks();
  }
}
