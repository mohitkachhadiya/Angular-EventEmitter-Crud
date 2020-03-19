import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
	providers: [FilterPipe]
})
export class ListComponent implements OnInit {

	demo:any = null;
	val:any = null;
	allData:any = [];
	id:any;
	data:any;
	fromSearchedItems:any;

	constructor(private router: Router,private activatedRoute: ActivatedRoute, private _filterPipe:FilterPipe) {
		this.allData = JSON.parse(localStorage.getItem("allData"));
		const data = this.allData;	
		this.fromSearchedItems = data;
	}

	ngOnInit() {
	} 	

	searchByName(items){
		console.log("the all user data ois ====>",this.allData);
		var field1 = (<HTMLInputElement>document.getElementById("nameSearch")).value;
		this.allData = this._filterPipe.transform(items, field1);
	}

	addUser(){
		this.router.navigate(['/add'])
	}

	getEdit(selected){
		localStorage.setItem("updatingOBJ"	, selected);
		this.router.navigate(['/edit'])
	}

	getDelete(i){
		this.allData.splice(i, 1);
  		if(this.allData && this.allData.length)
  			localStorage.setItem("allUser", JSON.stringify(this.allData))
  		else
  			localStorage.setItem("allUser", JSON.stringify([]))
	}

}

