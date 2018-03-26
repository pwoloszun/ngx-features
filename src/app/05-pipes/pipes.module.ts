import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { MultiplyPipe } from './multiply.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PipesExamplesComponent,
    MultiplyPipe,
    ReversePipe,
  ],
  exports: [
    PipesExamplesComponent,
  ],
})
export class PipesModule {
}
