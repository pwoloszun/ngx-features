import {
  Component,
  OnInit,
} from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'nts-todos-list',
  templateUrl: './todos-list.component.html',
})
export class TodosListComponent implements OnInit {

  ngOnInit() {
  }
}
