import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { StudentService } from './student.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'demo';
	message: string;
	isAdd:boolean = false;
	
	addData1:any = null;
	students = [];
	indexObject:any;

	constructor() {
		// this.studentservice.getMessage().subscribe( message => {
		// 	this.message = message;
		// });
	}
	ngOnInit(){

	}

	addUser(){
		console.log("IN ADD FUNCTION");
		this.addData1 = null;
		this.isAdd = true;
	}

	allData(addData){
		this.isAdd = false; 
		this.students.push(addData);
		console.log(addData);
		console.log(this.students);
	}

	onDelete(i){
		console.log("Delete User is", i);
		this.students.splice(i , 1)
	}

	editUser(i){
		console.log("IN EDIT FUNCTION");
		this.isAdd = true;
		this.addData1 = this.students[i];
		this.indexObject = i;
		console.log("in parent user ==>", this.addData1);
	}

	editedObject(editObject){
		this.isAdd = false;
		console.log("the edited students is: " , editObject);
		console.log("the studnets is=========>", this.students)	;
		console.log("the edited students index  is ===>", this.indexObject);
		this.students[this.indexObject] = editObject
	}
}




















	/*isAdd:boolean = false;
	
	addData1:any = null;
	students = [];
	indexObject:any;

	ngOnInit(){ 
		
	}

	addUser(){
		console.log("IN ADD FUNCTION");
		this.addData1 = null;
		this.isAdd = true;
	}

	allData(addData){
		this.isAdd = false; 
		this.students.push(addData);
		console.log(addData);
		console.log(this.students);
	}

	onDelete(i){
		console.log("Delete User is", i);
		this.students.splice(i , 1)
	}

	editUser(i){
		console.log("IN EDIT FUNCTION");
		this.isAdd = true;
		this.addData1 = this.students[i];
		this.indexObject = i;
		console.log("in parent user ==>", this.addData1);
	}

	editedObject(editObject){
		this.isAdd = false;
		console.log("the edited students is: " , editObject);
		console.log("the studnets is=========>", this.students)	;
		console.log("the edited students index  is ===>", this.indexObject);
		this.students[this.indexObject] = editObject
	}*/