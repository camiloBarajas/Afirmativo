import { Injectable } from '@angular/core';
import { Config } from 'app/app.config';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthenticationService } from 'app/services/authentication.service';
import { Project } from 'app/models/project';

@Injectable()
export class ProjectService {

  apiBaseURL: string = Config.API_SERVER_URL;

    constructor(public _http: Http,
                public authenticationService: AuthenticationService, 
                // public _locker: SessionStorageService
              ) {
    }

  public getProducts() {
    const url = `${this.apiBaseURL}/api/Projects/GetAll`;

    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/josn',
      // 'Authorization' : 'Bearer ' + this.authenticationService.authorizationData.access_token
    });

    const options = new RequestOptions({headers: headers});
    const body: any = [];

    // console.log('Llamando al servivio de productos');
    // console.log('url: ' + url);
    // console.log('options: ' + JSON.stringify(options, null, 2));
    // console.log('headers: ' + JSON.stringify(headers, null, 2));


    return this._http.get(url , options).map(response => response.json());
  }

  public newProduct(Project: Project) {
    const url = `${this.apiBaseURL}/api/Projects/New`;

    const headers = new Headers({
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
      // 'Authorization' : 'Bearer ' + this.authenticationService.authorizationData.access_token
    });

    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(Project);

    // console.log('calling service mew product');

    // console.log('url: ' + url);
    // console.log('body: ' + JSON.stringify(body, null, 2));
    // console.log('options: ' + JSON.stringify(options, null, 2));
    // console.log('headers: ' + JSON.stringify(headers, null, 2));


    return this._http.post(url, body, options).map(response => response.json());
  }

  public editProduct(Project: Project) {
    const url = `${this.apiBaseURL}/api/Projects/Edit`;

    const headers = new Headers({
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
      // 'Authorization' : 'Bearer ' + this.authenticationService.authorizationData.access_token
    });

    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(Project);

    // console.log('calling service mew product');

    // console.log('url: ' + url);
    // console.log('body: ' + JSON.stringify(body, null, 2));
    // console.log('options: ' + JSON.stringify(options, null, 2));
    // console.log('headers: ' + JSON.stringify(headers, null, 2));


    return this._http.post(url, body, options).map(response => response.json());
  }

  public deleteProduct(id: string) {
    const url = `${this.apiBaseURL}/api/Projects/Delete?Id=${id}`;

    const headers = new Headers({
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
      // 'Authorization' : 'Bearer ' + this.authenticationService.authorizationData.access_token
    });

    const options = new RequestOptions({headers: headers});
    // const body = JSON.stringify(Project);

    // console.log('calling service mew product');

    // console.log('url: ' + url);
    // console.log('body: ' + JSON.stringify(body, null, 2));
    // console.log('options: ' + JSON.stringify(options, null, 2));
    // console.log('headers: ' + JSON.stringify(headers, null, 2));


    return this._http.delete(url, options).map(response => response.json());
  }

}


