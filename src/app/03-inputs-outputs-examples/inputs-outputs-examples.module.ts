import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CarConfiguratorComponent } from './car-configurator/car-configurator.component';
import { OptionPickerComponent } from './option-picker/option-picker.component';
import { InputsOutputsExamplesComponent } from './inputs-outputs-examples/inputs-outputs-examples.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ParentComponent,
    ChildComponent,
    CarConfiguratorComponent,
    OptionPickerComponent,
    InputsOutputsExamplesComponent,
  ],
  exports: [
    InputsOutputsExamplesComponent,
  ],
})
export class InputsOutputsExamplesModule {
}
