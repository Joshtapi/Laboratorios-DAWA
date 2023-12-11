import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];
  taskStates: boolean[] = [];
  @Input() filteredTasks: { name: string, completed: boolean }[] = [];

  toggleTaskState(index: number) {
    this.taskStates[index] = !this.taskStates[index];
  }
}

