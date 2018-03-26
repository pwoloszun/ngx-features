import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ComponentBasicsComponent } from './component-basics/component-basics.component';
import { TodosComponent } from '../04-todos/todos/todos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HelloWorldComponent,
    PersonalDataComponent,
    ComponentBasicsComponent,
  ],
  exports: [
    ComponentBasicsComponent,
  ],
})
export class ComponentBasicsModule {
}
