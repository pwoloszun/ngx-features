import { Injectable } from '@angular/core';

import { Todo } from '../04-todos/todo';
import { DataApiService } from '../core/services/data-api.service';

@Injectable()
export class TodosService extends DataApiService<Todo> {

  getUrl(): string {
    return '/api/todos';
  }

}
