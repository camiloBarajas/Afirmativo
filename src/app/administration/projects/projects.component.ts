import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import 'rxjs/add/operator/toPromise';

import { Project } from 'app/models/project';
import { ProjectService } from 'app/services/project.service';
import { DataTable } from 'app/ui-components/data-table/data-table.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private _currentItem: Project;
  public isAdding: boolean;
  public isEditing: boolean;
  public isDeleting: boolean;


  public itemsSource: Array<Project>;



  public get currentItem() {
    // console.log('get currentItem project: ' + JSON.stringify(this._currentItem, null, 2));
    return this._currentItem;
  }

  public set currentItem(item) {
    // console.log('set currentItem project: ' + JSON.stringify(item, null, 2));
    this._currentItem = item;
  }

  constructor(public _projectService: ProjectService) {
    this.currentItem = new Project();
    this.itemsSource = new Array<Project>();

    this.isAdding = false;
    this.isEditing = false;
    this.isDeleting = false;
  }

  ngOnInit() {
    this.getItems();
  }

  clickNew() {
    this.currentItem = new Project();
    this.isAdding = true;
    // this.itemSource.push(this._currentItem);
  }

  clickEdit() {
    this.isEditing = true;
  }

  clickDelete() {
    this.deleteItem(this._currentItem.id);
    this.isDeleting = true;
  }

  clickCancel() {
    if (this.isAdding) {
      this._currentItem = new Project();
    }

    this.isAdding = false;
    this.isEditing = false;
    this.isDeleting = false;
  }

  clicOk(event) {
    console.log('on ok');
    if (this.currentItem.id === '') {
      console.log('id vacio');
      this.addItem(this.currentItem);
    } else {
      console.log('id = ' + this.currentItem.id);
      this.editItem(this.currentItem);
    }


    this.isAdding = false;
    this.isEditing = false;
    this.isDeleting = false;
  }

  onItemSelected(item) {
    // console.log('onItemSelected');
    // console.log('onItemSelected item: ' + JSON.stringify(item, null, 2));
    this.currentItem = item;
  }


  // getCurrentItemString() {
  //   return JSON.stringify(this.currentItem, null, 2)
  // }

  clickSpecification(item) {
  }
  clickResources(item) {
  }

  rowSelect(item) {
    // console.log('init row clic');
    this.currentItem = item;
    // console.log('onRowSelect currentItem: ' + JSON.stringify(this.currentItem, null, 2));
    // console.log('end row clic');
  }

  getItems() {
    this._projectService.getProducts()
    .subscribe(
      data => {
        if (data) {
          if (data.ok) {
            this.itemsSource = data.result;
            // console.log('data get item: ' + JSON.stringify(data, null, 2));
          }
        }
        // console.log('data get item: ' + JSON.stringify(data, null, 2));
      },
      error => {
        console.log('error get item: ' + JSON.stringify(error, null, 2));
      },
      () => {
        // complete get items
      });
  }

  addItem(project: Project) {
    this._projectService.newProduct(this.currentItem)
    .subscribe(
      data => {
        if (data) {
          if (data.ok) {
            this.getItems();
            this.currentItem = new Project();
          }
        }
        // console.log('data add item: ' + JSON.stringify(data, null, 2));
      },
      error => {
        console.log('error add item: ' + JSON.stringify(error, null, 2));
      },
      () => {
        // this.isAdding = false;
      });
  }

  editItem(project: Project) {
    this._projectService.editProduct(this.currentItem)
    .subscribe(
      data => {
        if (data) {
          if (data.ok) {
            this.getItems();
            // this.onRowSelect(this.currentItem);
          }
        }
        // console.log('data edit item: ' + JSON.stringify(data, null, 2));
      },
      error => {
        console.log('error edit item: ' + JSON.stringify(error, null, 2));
      },
      () => {
        // this.isEditing = false;
      });
  }

  deleteItem(id: string) {
    this._projectService.deleteProduct(this.currentItem.id)
    .subscribe(
      data => {
        if (data) {
          if (data.ok) {
            this.getItems();
            this.currentItem = new Project();
          }
        }
        // console.log('data delete item: ' + JSON.stringify(data, null, 2));
      },
      error => {
        console.log('error delete item: ' + JSON.stringify(error, null, 2));
      },
      () => {
        // this.isDeleting = false;
      });
  }
}
