import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from './api/api.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentBasicsModule } from './01-component-basics/component-basics.module';
import { BindingExamplesModule } from './02-binding-examples/binding-examples.module';
import { InputsOutputsExamplesModule } from './03-inputs-outputs-examples/inputs-outputs-examples.module';
import { TodosModule } from './04-todos/todos.module';
import { PipesModule } from './05-pipes/pipes.module';
import { HeroesModule } from './08-heroes/heroes.module';
import { CitiesModule } from './09-cities/cities.module';
import { RealEstatesModule } from './10-real-estates/real-estates.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MdlModule,
    // core & shared
    CoreModule,
    AppRoutingModule,
    ApiModule,
    SharedModule,
    // features
    DashboardModule,
    ComponentBasicsModule,
    BindingExamplesModule,
    InputsOutputsExamplesModule,
    TodosModule,
    PipesModule,
    HeroesModule,
    CitiesModule,
    RealEstatesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
