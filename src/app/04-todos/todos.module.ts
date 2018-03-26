import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdlModule,
  ],
  declarations: [
    TodosListComponent,
    TodosFormComponent,
    TodosComponent,
  ],
  exports: [
    TodosComponent,
  ],
})
export class TodosModule {
}
