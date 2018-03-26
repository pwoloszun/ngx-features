import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableComponent } from './data-table/data-table.component';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataTableComponent,
    GoogleMapComponent,
  ],
  exports: [
    DataTableComponent,
    GoogleMapComponent,
  ],
})
export class SharedModule {
}
