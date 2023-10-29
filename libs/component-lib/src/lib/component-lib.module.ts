import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './todolist/list.component';

const components = [TodoComponent, ListComponent];

@NgModule({
  imports: [...components],
  exports: [...components],
  declarations: [],
})
export class ComponentLibModule {}
