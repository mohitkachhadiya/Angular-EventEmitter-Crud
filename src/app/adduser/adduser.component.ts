import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-adduser',
	templateUrl: './adduser.component.html',
	styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
	isEdit:boolean = false;
	isUser:boolean = true;
	isForm:boolean = true;
	objToEdit:any = null;
	@Input() var1:any = null;
	@Output() public data = new EventEmitter();
	@Output() public editedData = new EventEmitter();

	students = {
		"studentName": "",
		"studentSurname": "",
		"studentDivision": "",
		"studentRollno": "",
		"studentGrade": ""
	}

	constructor(
		public _dataService : DataService,
		public _router : Router
		) { 
	}

	ngOnInit() {
		console.log("In add user component ==>",  this.var1);
		this.isEdit = true;	
		this.isUser = true;		
		if(this.var1 != null){
				this.isEdit = false;
				this.isUser = false;		
				this.students.studentName = this.var1.studentName,
				this.students.studentSurname = this.var1.studentSurname,
				this.students.studentDivision = this.var1.studentDivision,
				this.students.studentRollno = this.var1.studentRollno,
				this.students.studentGrade = this.var1.studentGrade						
			}
	}	

	onSubmit(){
		this.var1 = null		
		this.isUser = false;
		this.data.emit(this.students);
		this.students = {
			"studentName": "",
			"studentSurname": "",
			"studentDivision": "",
			"studentRollno": "",
			"studentGrade": ""
		}
	}
	onEdit(){	
		// this.isForm = false;

		this.var1 = null
		this.editedData.emit(this.students);
		// console.log(this.editedData);
		// console.log(this.students);
	}
}
