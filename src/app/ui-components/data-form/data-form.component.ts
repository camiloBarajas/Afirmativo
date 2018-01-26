import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit, AfterContentInit } from '@angular/core';

// import 'rxjs/add/operator/toPromise';

import { DataField } from 'app/ui-components/data-field/data-field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class DataForm implements OnInit, AfterViewInit, AfterContentInit {

  private _currentItem: any;
  public isAdding: boolean;
  public isEditing: boolean;
  public isDeleting: boolean;

  @Input()
  get item() {
    // console.log('get item: ' + JSON.stringify(this._currentItem, null, 2));
    return this._currentItem;
  }

  set item(item: any) {
    this._currentItem = item;
    // console.log('set item: ' + JSON.stringify(this._currentItem, null, 2));
  }


  // UI components:
  @ContentChildren(DataField) fields: QueryList<DataField>;


  // event handlers:
  @Output() onNew = new EventEmitter();
  @Output() onEdit= new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter();


  constructor() {
    this._currentItem = {};
    // this.itemsSource = [];

    this.isAdding = false;
    this.isEditing = false;
    this.isDeleting = false;
  }

  ngOnInit() {
    // console.log('ngOnInit');
    // this.dataFormGroup = new FormGroup({});
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {
  }


  clicNew() {
    // console.log('clic on new button');
    this.isAdding = true;
    this.onNew.emit(null);
  }

  clicEdit() {
    // console.log('clic on edit button');
    this.isEditing = true;
    this.onEdit.emit(null);
  }

  clicDelete() {
    // console.log('clic on delete button');
    this.isDeleting = true;
    this.onDelete.emit(null);
  }

  cancel() {
    // console.log('clic on cancel button');
    if (this.isAdding) {
      this._currentItem = {};
    }

    this.isAdding = false;
    this.isEditing = false;
    this.isDeleting = false;

    this.onCancel.emit(null);
  }

  ok() {
    console.log('ok');

    this.isAdding = false;
    this.isEditing = false;
    this.isDeleting = false;

    this.onOk.emit(null);
  }
}
