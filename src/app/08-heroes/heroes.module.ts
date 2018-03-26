import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HeroesComponent,
  ],
  exports: [
    HeroesComponent,
  ],
  providers: [
    HeroesService,
  ],
})
export class HeroesModule {
}
