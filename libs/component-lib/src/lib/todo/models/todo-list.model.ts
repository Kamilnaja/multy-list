// when todo is on list

import { Priority } from './priority.model';

export interface TodoListItem {
  name: string;
  id: string;
  priority: Priority;
}
