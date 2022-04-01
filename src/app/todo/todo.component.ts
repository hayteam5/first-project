import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()  taskCount:number = 0;


  @Output() taskCounterChange = new EventEmitter();

  taskList = [];
  newTaskName: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  addTask(arr: any[], element: any) {
    arr.push(element);
    this.taskCount += 1;
  }

  deleteTask(index:any) {
    this.taskList.splice(index,1);
    this.taskCount -= 1;
  }

}
