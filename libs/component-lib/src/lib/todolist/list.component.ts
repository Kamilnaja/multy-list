import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TodoListItem } from '../todo/models/todo-list.model';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'shared-multy-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    TodoComponent,
    NgFor,
    CdkDropList,
    NgFor,
    CdkDrag,
    CdkDragPlaceholder,
  ],
})
export class ListComponent {
  @Input() todos: TodoListItem[];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
