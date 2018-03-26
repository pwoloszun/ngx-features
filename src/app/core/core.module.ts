import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainNavComponent } from './main-nav/main-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataApiService } from './services/data-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    MainNavComponent,
    PageNotFoundComponent,
  ],
  exports: [
    FormsModule,
    MainNavComponent,
    PageNotFoundComponent,
  ],
  providers: [
    DataApiService,
  ],
})
export class CoreModule {
}
