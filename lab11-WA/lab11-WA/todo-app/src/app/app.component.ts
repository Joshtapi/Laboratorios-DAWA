import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  tasks: { name: string, completed: boolean }[] = [];

  filteredTasks: { name: string, completed: boolean }[] = [];

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
    this.applyFilter();
  }  

  onFilterSelected(filter: string) {
    switch (filter) {
      case 'all':
        this.filteredTasks = [...this.tasks];
        break;
      case 'completed':
        this.filteredTasks = this.tasks.filter(task => task.completed);
        break;
      case 'incomplete':
        this.filteredTasks = this.tasks.filter(task => !task.completed);
        break;
    }
  }
  private applyFilter() {
    this.onFilterSelected('all'); // Aplica el filtro actual al agregar una nueva tarea
  }
}
