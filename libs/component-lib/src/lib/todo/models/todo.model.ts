import { Priority } from './priority.model';
import { TodoListItem } from './todo-list.model';

export interface Todo extends TodoListItem {
  completion: boolean;
  priority: Priority;
  completionDate: Date;
  creationDate: Date;
  description: string;
  tags: string[];
  project: string;
  contextTag: string[];
}
