import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstatesComponent } from './real-estates/real-estates.component';
import { DetailsComponent } from './details/details.component';
import { RealEstatesService } from './real-estates.service';
import { ManageRealEstatesService } from './manage-real-estates.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    RealEstatesComponent,
    DetailsComponent,
  ],
  exports: [
    RealEstatesComponent,
  ],
  providers: [
    RealEstatesService,
    ManageRealEstatesService,
  ],
})
export class RealEstatesModule {
}
