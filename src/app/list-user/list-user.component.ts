import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
	selector: 'app-list-user',
	templateUrl: './list-user.component.html',
	styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

	allData:any = [];

	constructor(public _router: Router, public _userService: UserService) { }

	ngOnInit() {
		this.allUser();
	}

	allUser(){
		 this._userService.getAllUser().subscribe((res:any) => {
        console.log("the correct response is ====>", res);
        this.allData = res;
      }, (err) => {
        console.log("the error is the ===>", err);
      })
	}

	addUser(){
		this._router.navigate(['addUser']);
	}

	editUser(select){
		console.log("the select id is =====>", select);
		this._router.navigate(['editUser'], {state: this.allData[select]._id});
	}

	deleteUser(i){
		console.log("the delete id of user is ===>", i);
		this._userService.deleteUser(this.allData[i]._id).subscribe((res) => {
			console.log("the delete res user is ====>", res);
			this.allData.splice(i, 1);
		}, (err) => {
			console.log("the delete user err is ===>", err);
		})
	}
}
