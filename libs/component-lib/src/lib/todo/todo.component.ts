import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TodoListItem } from './models/todo-list.model';
import { PRIORITIES } from './priority.const';
@Component({
  selector: 'shared-multy-todo',
  standalone: true,
  imports: [
    MatButtonModule,
    NgIf,
    NgFor,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: TodoListItem;

  readonly priorities = PRIORITIES;

  isOpened = false;
}
