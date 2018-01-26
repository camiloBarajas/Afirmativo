import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTable } from './data-table/data-table.component';
import { DataColumn } from 'app/ui-components/data-column/data-column.component';
import { DataForm } from './data-form/data-form.component';
import { DataField } from './data-field/data-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonColumn } from './button-column/button-column.component';
import { LinkColumnComponent } from './link-column/link-column.component';

@NgModule({
  declarations: [
    DataTable,
    DataColumn,
    DataForm,
    DataField,
    ButtonColumn,
    LinkColumnComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DataTable,
    DataColumn,
    DataForm,
    DataField,
    ButtonColumn
  ]
})
export class UiComponentsModule { }
