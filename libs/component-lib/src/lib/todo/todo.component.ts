import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'shared-multy-todo',
  standalone: true,
  imports: [MatButtonModule, NgIf],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() setup: TodoComponent;

  isOpened = false;
}
