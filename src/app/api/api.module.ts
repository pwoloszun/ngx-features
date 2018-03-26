import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MyDataService } from './my-data.service';
import { TodosService } from './todos.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    MyDataService,
    TodosService,
  ],
})
export class ApiModule {
}
