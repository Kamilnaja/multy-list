import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'shared-multy-todo',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {}
