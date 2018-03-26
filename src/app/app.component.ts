import { Component } from '@angular/core';

@Component({
  selector: 'nts-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-features';

  mainMenuLinks = [
    {text: 'Dashboard', url: '/'},
    {text: 'Comp. Basics', url: '/component-basics'},
    {text: 'Bindings Types', url: '/bindings-examples'},
    {text: 'Inputs/Outputs', url: '/inputs-outputs-examples'},
    {text: 'Todos', url: '/todos'},
    {text: 'Pipes', url: '/pipes-examples'},
    {text: 'Heroes', url: '/heroes'},
    {text: 'Cities', url: '/cities'},
    {text: 'Real Estates', url: '/real-estates'},
    {text: 'About', url: '/about'},
  ];
}
