import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterSelected = new EventEmitter<string>();

  onFilterSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    const filter = target.value;
    this.filterSelected.emit(filter);
  }
}
