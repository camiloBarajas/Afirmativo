import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {LocalStorageService} from 'ngx-webstorage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Config } from 'app/app.config';
import { AuthorizationData } from 'app/models/authorizationData';

@Injectable()
export class AuthenticationService {

  apiBaseURL: string = Config.API_SERVER_URL;

  // hasSession: Boolean;
  // userName: String;
  // useRefreshTokens: Boolean;
  // refreshToken: String;

  public authorizationData: any;

  constructor(public _http: Http, public _locker: LocalStorageService) {
    // this.authorizationData = new AuthorizationData;
  }

  public isLoggedIn() {
    this.authorizationData = this._locker.retrieve('authorizationData');
    // console.log('local strage: ' + JSON.stringify(this.authorizationData, null, 2));

    if (!!this.authorizationData) {
      // this.authorizationData = new AuthorizationData();
      // this.authorizationData.access_token = authorizationData.access_token;
      // this.authorizationData.token_type = authorizationData.token_type;
      // this.authorizationData.expires_in = authorizationData.expires_in;
      // this.authorizationData.client_id = authorizationData.client_id;
      // this.authorizationData.userName = authorizationData.userName;
      // this.authorizationData.issued = authorizationData.issued;
      // this.authorizationData.expires = authorizationData.expires;

      // console.log('authorizationData: ' + JSON.stringify(this.authorizationData, null, 2));
      const newDate = new Date(this.authorizationData['.issued']);
      // console.log('newDate: ' + JSON.stringify(newDate, null, 2));

      const Date2 = newDate.toLocaleString();
      // console.log('Date2: ' + Date2);


      return true;
    }

    return false;
  }

  public logIn(username: string, password: string) {
    const url = `${this.apiBaseURL}/api/token`;

    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const options = new RequestOptions({headers: headers});
    const body = 'grant_type=password&username=' + username + '&password=' + password;

    // console.log('url' + url);
    // console.log('body' + body);
    // console.log('options' + options);

    return this._http.post(url, body, options)
    .map(
      response => {
        if( response.json())
        {
          // console.log('RESPONSE.... ' + response);
        const data = response.json();
          // console.log('login data: ' +JSON.stringify(data, null, 2));
          // this._authService.user = data;
          // this._authService.hasSession = true;
          this._locker.store('authorizationData', data);
          // console.log('almacenado el token ' + data.access_token);

          return true;
        } else {
          // console.log('respose data: ' + JSON.stringify(response, null, 2));

          return false;
        }
      });
  }

  public logout() {
    // console.log('init logout');

    this.authorizationData = null;
    this._locker.clear('authorizationData');
  }
}
