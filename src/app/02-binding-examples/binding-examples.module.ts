import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PropertyBindingExampleComponent } from './01-property-binding-example/property-binding-example.component';
import { EventBindingExampleComponent } from './02-event-binding-example/event-binding-example.component';
import { TwoWayBindingExampleComponent } from './03-two-way-binding-example/two-way-binding-example.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';
import { StyledTextComponent } from './styled-text/styled-text.component';
import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PropertyBindingExampleComponent,
    EventBindingExampleComponent,
    TwoWayBindingExampleComponent,
    BindingExamplesComponent,
    StyledTextComponent,
    QuadraticEquationComponent,
  ],
  exports: [
    BindingExamplesComponent,
  ],
})
export class BindingExamplesModule {
}
