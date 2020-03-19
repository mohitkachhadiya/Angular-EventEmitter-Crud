import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})

export class DataService {

	constructor(
		public _httpClient : HttpClient
		) { }


	onSubmit(value){
		// console.log("value ===>", value);
		// return this._httpClient.post('http://192.168.1.89:5000/add-user', value);
	}

	getData(){
		
		// return this._httpClient.get('http://192.168.1.89:5000/get-users');
		// return this._httpClient.get('http://dummy.restapiexample.com/api/v1/employees');
	}

}

