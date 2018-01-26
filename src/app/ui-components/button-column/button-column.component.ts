import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataColumn } from '../data-column/data-column.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button-column',
  templateUrl: './button-column.component.html',
  styleUrls: ['./button-column.component.css'],
  providers: [
    {provide: DataColumn, useExisting: ButtonColumn, multi: true}
  ]
})
// tslint:disable-next-line:component-class-suffix
export class ButtonColumn extends DataColumn implements OnInit {

  @Input() icon: string;
  @Output() onclick: EventEmitter<any>;

  constructor() {
    super();
    this.icon = '';
    this._columnType = 'ButtonColumn';
    this.onClick = new EventEmitter();
  }

  // public click(): void {
  //   this.onclick.emit(this);
  // }

  ngOnInit() {
  }

}
