import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class DataField implements OnInit {

  @Input() label: string;
  @Input() property: string;
  @Input() controlType: string;
  @Input() required: boolean;
  @Input() placeholder: string;

  constructor() {
    this.label = '';
    this.property = '';
    this.controlType = 'textbox';
    this.required = false;
    this.placeholder = '';
  }

  ngOnInit() {
  }

}
