import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ComponentBasicsComponent } from './01-component-basics/component-basics/component-basics.component';
import { BindingExamplesComponent } from './02-binding-examples/binding-examples/binding-examples.component';
import { InputsOutputsExamplesComponent } from './03-inputs-outputs-examples/inputs-outputs-examples/inputs-outputs-examples.component';
import { TodosComponent } from './04-todos/todos/todos.component';
import { PipesExamplesComponent } from './05-pipes/pipes-examples/pipes-examples.component';
import { HeroesComponent } from './08-heroes/heroes/heroes.component';
import { CitiesComponent } from './09-cities/cities/cities.component';
import { RealEstatesComponent } from './10-real-estates/real-estates/real-estates.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'component-basics',
    component: ComponentBasicsComponent,
  },
  {
    path: 'bindings-examples',
    component: BindingExamplesComponent,
  },
  {
    path: 'inputs-outputs-examples',
    component: InputsOutputsExamplesComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'pipes-examples',
    component: PipesExamplesComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'cities',
    component: CitiesComponent,
  },
  {
    path: 'real-estates',
    component: RealEstatesComponent,
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule',
  },
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only,
        preloadingStrategy: PreloadAllModules,
      }
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
