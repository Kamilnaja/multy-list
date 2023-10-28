import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [CommonModule, TodoComponent],
  exports: [TodoComponent],
})
export class ComponentLibModule {}
