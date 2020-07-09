import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getAllUser(){
  	return this.http.get("http://localhost:3000/users/getUsers/");
  }
  
  getUser(id){
  	return this.http.get("http://localhost:3000/users/getUserById/"+ id);
  }

  addUser(value){
  	return this.http.post("http://localhost:3000/users/addUser/", value);
  }

  editUser(id, value){
  	return this.http.put("http://localhost:3000/users/updateUserById/"+ id, value);
  }

  deleteUser(id){
  	return this.http.delete("http://localhost:3000/users/deleteUserById/"+ id);
  }
}
