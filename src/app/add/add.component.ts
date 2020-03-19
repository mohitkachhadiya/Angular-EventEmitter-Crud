import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	constructor( public router: Router) { }

	ngOnInit() {
		
	}

	allData = {
		"firstName": "", 		
		"lastName": "",
		"mobileNo": "",
		"email": "",
	}

	sendMessage(){
		var localstorage;
		var data:any = [];
		if(localStorage.getItem("allData"))
			localstorage = JSON.parse(localStorage.getItem("allData"));
		if(localstorage && localstorage.length)
			data = localstorage;
		data.push(this.allData)
		localStorage.setItem("allData", JSON.stringify(data))
		this.router.navigate(['/list']);
	}
}
