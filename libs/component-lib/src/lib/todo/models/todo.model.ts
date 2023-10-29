import { TodoListItem } from './todo-list.model';

// full object with details

export interface Todo extends TodoListItem {
  completionDate: Date;
  creationDate: Date;
  description: string;
  tags: string[];
  project: string;
  contextTag: string[];
}
