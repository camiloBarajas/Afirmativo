import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-column',
  templateUrl: './data-column.component.html',
  styleUrls: ['./data-column.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class DataColumn implements OnInit {

  protected _columnType: string;

  @Input() header: string;
  @Input() property: string;
  @Input() horizontalAlignament: string;

  @Input() onClick = new EventEmitter();

  get columnType(): string{
    return this._columnType;
  }


  constructor() {
    this._columnType = 'DataColumn';
    this.horizontalAlignament = 'text-left';
    this.header = '';
    this.property = '';

  }


  ngOnInit() {
  }

}
