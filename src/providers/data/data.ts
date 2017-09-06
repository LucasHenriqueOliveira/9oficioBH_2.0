import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import { Constants } from "../../app/constants";
import { Storage } from '@ionic/storage';
import { UserProvider } from "../user/user";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

	constants: any = Constants
	token: any
	user: any

	constructor(public http: Http, private storage: Storage, private userProvider: UserProvider) {}

	getHistorico(id: number): Observable<string> {
		return Observable.fromPromise(this.userProvider.getToken()).mergeMap(token => {
			this.token = token;
			
			this.user = this.userProvider.getUserData();
			const headers = new Headers(); 
			
			headers.append('Authorization', 'Bearer ' + this.token)
			headers.append('Content-Type', 'application/json')
			return this.http.get(`${this.constants.api}/historico?user_id=${id}`, new RequestOptions({headers: headers}))
				.map(response => response.json())
		});
	}

}
