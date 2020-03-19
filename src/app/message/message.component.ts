import { Component, OnInit } from '@angular/core';
// import { StudentService } from './../student.service';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
	constructor() {
	}
	// constructor(private studentservice: StudentService) {
	// }
	// message:string;
	ngOnInit(){
	}

	// sendMessage() {
	// 	this.studentservice.sendMessage(this.message);
	// 	this.message=null;
	// }

	// clearMessage() {
	// 	this.studentservice.clearMessage();
		
	// }
	
}
