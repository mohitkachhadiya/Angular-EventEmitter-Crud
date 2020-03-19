import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { FormBuilder } from '@angular/forms';



@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	// anyName:any;	

	constructor(
		// public _dataService : DataService,
		) { }

	ngOnInit() {
		// this.Users();
	}

	// Users(){
	// 	this._dataService.getData().subscribe((res) => {
	// 			console.log(res);
	// 			this.anyName = res;
	// 	},(err) => {
	// 		console.log(err);
	// 	})
	// }

	// onEdit(){
		
	// }

	// onDelete(){

	// }


	/////// console.log(this.dataArr);
		// this._dataService.onSubmit(this.dataArr).subscribe((res:any) => {
			// 	this.dataArr = res.dataArr;
			// 	this._router.navigate(['About']);
			// 	console.log(res);
			// },(err) => {
				// 	console.log(err);
				// });
}
