import { Component, OnInit, Input, ContentChildren, QueryList, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { DataColumn } from 'app/ui-components/data-column/data-column.component';
import { ButtonColumn } from 'app/ui-components/button-column/button-column.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class DataTable implements OnInit, AfterContentInit {

  private _itemsSource: any[] = [];
  private _currentItem: any;
  private _border: boolean;
  private _disable: boolean;

  @Input()
  get border() {
    return this._border;
  }

  set border(hasBorder) {
    // console.log(hasBorder);
    this._border = hasBorder;
  }

  @Input()
  get disable() {
    return this._disable;
  }

  set disable(hasDisable) {
    // console.log(hasDisable);
    this._disable = hasDisable;
  }

  @Input()
  get itemsSource() {
    // console.log('get itemsSource: ' + JSON.stringify(this._itemsSource, null, 2));
    return this._itemsSource;
  }

  set itemsSource(items: any[]) {
      // console.log('set itemsSource: ' + JSON.stringify(items, null, 2));
      this._itemsSource = items;
  }

  @Input()
  get currentItem() {
    // console.log('get currentItem: ' + JSON.stringify(this._currentItem, null, 2));
    return this._currentItem;
  }

  set currentItem(item: any) {
      this._currentItem = item;
      // console.log('set currentItem: ' + JSON.stringify(this._currentItem, null, 2));
      // console.log('emitiendo evento itemSelected');
      this.itemSelected.emit(this._currentItem);
      // this.itemSelected.emit('hola mundo');
  }

  // UI components:
  @ContentChildren(DataColumn) columns: QueryList<DataColumn>;


  // event handlers:
  @Output() itemSelected: EventEmitter<any> = new EventEmitter();


  constructor() {
    this._currentItem = {};
    this.itemsSource = [];
  }

  clickButtonColumn() {
    // console.log('event click button: ' + JSON.stringify(e));
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.columns.forEach(c => console.log(c.header));
    // this.columns.forEach(c => {
    //   if (<ButtonColumn>c) {
    //     c.onClick.subscribe(
    //       (e) => {
    //         console.log('xxxxxxxxxx');
    //         console.log(e);
    //       }
    //     )
    //   }
    // });
  }

  onRowSelect(item) {
    // console.log('init row clic');
    this.currentItem = item;
    // console.log('onRowSelect currentItem: ' + JSON.stringify(this.currentItem, null, 2));
    // console.log('end row clic');
  }
}
