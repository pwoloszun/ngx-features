import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { Todo } from '../todo';
import { TodosService } from '../../api/todos.service';
import { TodoFormVm } from '../todo-form-vm';

@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todosService.getAll().subscribe((todos: Todo[]) => {
      console.log('getAll', todos);
    });
  }

  deleteTodo(todo) {
    // TODO
  }

  createTodo(todoData: TodoFormVm) {
    // TODO
  }
}
