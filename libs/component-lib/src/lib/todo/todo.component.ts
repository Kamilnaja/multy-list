import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'multilist-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {}
