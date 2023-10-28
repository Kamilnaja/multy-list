export interface Todo {
  completion: boolean;
  priority: number;
  completionDate: Date;
  creationDate: Date;
  description: string;
  tags: string[];
  project: string;
  contextTag: string[];
}
