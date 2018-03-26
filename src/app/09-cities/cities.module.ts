import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    CitiesComponent,
  ],
  exports: [
    CitiesComponent,
  ],
})
export class CitiesModule {
}
