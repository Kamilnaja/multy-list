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
    },
    {
      name: 'test2',
      id: '2',
    },
    {
      name: 'test3',
      id: '3',
    },
  ];
  title = 'multy-list';
}
