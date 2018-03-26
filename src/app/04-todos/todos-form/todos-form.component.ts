import {
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TodoFormVm } from '../todo-form-vm';

@Component({
  selector: 'nts-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  // form: FormGroup;
  // title = new FormControl('', Validators.required);
  // description = new FormControl('');

  // constructor(private formBuilder: FormBuilder) {
  //   this.form = formBuilder.group({
  //     'xxx': this.title,
  //     'yyy': this.description,
  //   });
  // }

  ngOnInit() {
  }
}
