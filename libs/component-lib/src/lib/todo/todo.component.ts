import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TodoListItem } from './models/todo-list.model';
@Component({
  selector: 'shared-multy-todo',
  standalone: true,
  imports: [MatButtonModule, NgIf],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: TodoListItem;

  isOpened = false;
}
