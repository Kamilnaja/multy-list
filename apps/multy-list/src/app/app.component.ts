import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent, TodoListItem } from '@multilist/component-lib';

@Component({
  standalone: true,
  imports: [RouterModule, ListComponent],
  selector: 'multy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly todos: TodoListItem[] = [
    {
      name: 'test',
      id: '1',
      priority: 'A',
      isDone: false,
    },
    {
      name: 'test2',
      id: '2',
      priority: 'B',
      isDone: true,
    },
    {
      name: 'test3',
      id: '3',
      priority: 'C',
      isDone: false,
    },
  ];
  title = 'multy-list';
}
