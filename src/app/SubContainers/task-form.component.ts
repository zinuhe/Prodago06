import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ITask } from './task'; // Task interface
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {

  // constructor() { }
  constructor(private route: ActivatedRoute,  // Injected into the constructor
              private router: Router) { }     // import Router

  pageTitle = 'Task';

  addTaskForm = new FormGroup({
    priority: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    description: new FormControl('', [Validators.minLength(1), Validators.maxLength(255)]),
    status: new FormControl(''),
    dueDate: new FormControl('')
  });

  // Statuses array
  statuses = ['', 'Not Started', 'In Progress', 'Done'];


  // Edit
  selectedTask: ITask = {
    taskId: 0,
    priority: 0,
    description: '',
    status: '',
    dueDate: ''
  };

  ngOnInit() {
    this.addTaskForm.valueChanges.subscribe(console.log);

    // Get the parameter (id) from the URL
    let id = +this.route.snapshot.paramMap.get('id');
    console.warn('ID from URL: ' + id);

    if (id > 0) {
      this.pageTitle += ` Detail: ${id}`;

      this.selectedTask = {
        taskId: id,
        priority: 0,
        description: '-',
        status: '-',
        dueDate: '-'
      };
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.addTaskForm.value);
    console.warn(this.addTaskForm.controls['priority'].value);
    console.warn(this.addTaskForm.get('description').value);
  }

  revert() {
    this.addTaskForm.reset();
    console.warn(this.addTaskForm.status);
    console.warn(this.addTaskForm.touched);

    this.router.navigate(['/task']);
  }

  get getPriority() {
    return this.addTaskForm.get('priority');
  }

  get getDescription() {
    return this.addTaskForm.get('description');
  }
}
