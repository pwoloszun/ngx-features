import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// TODO:   @ViewChild('myXxx') myEl: ElementRef;

@Component({
  selector: 'nts-two-way-binding-example',
  templateUrl: './two-way-binding-example.component.html',
  styleUrls: ['./two-way-binding-example.component.css']
})
export class TwoWayBindingExampleComponent implements OnInit {

  message;
  types: string[];

  @ViewChild('myXxx') myEl: ElementRef;

  ngOnInit(): void {
    this.types = [
      'Private',
      'Public',
      'Top secret'
    ];

    this.message = {
      text: 'Imba!',
      type: this.types[0]
    };
  }

}
