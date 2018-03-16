import {Injectable} from '@angular/core';
import {Http, Response, Headers, ResponseOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { GLOBAL} from './global';
import { User} from '../models/user';

@Injectable()

export class PeticionesService{
	public url:string;

	constructor(
		private _http:Http,
		){
		this.url = GLOBAL.url;
	}

	getPrueba(){
		return "Hola desde el Servidor";
	}

	getUsuarios(){
		return this._http.get(this.url+'users').map(res=>res.json());
	}

	addNewUser(user: User){
		let json = JSON.stringify(user);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'registro',params,{headers:headers}).map(res=> res.json);
	}
}

