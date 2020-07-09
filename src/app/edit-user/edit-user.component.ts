import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

	obj:any;
	allData:any = [];
  userId:any;

  constructor(public _router: Router, public _userService: UserService) { 
    console.log("the selected edit user id is ====>", this._router.getCurrentNavigation().extras.state);
    this.userId = this._router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this._userService.getUser(this.userId).subscribe((res) => {
      console.log("the user id of get user =====>", res);
      this.obj = res;
    }, (err) => {
      console.log("the err of get single user ===>", err);
    })
  }

  editUser(){
    console.log("the allData id is the ====>", this.obj);
    this._userService.editUser(this.userId, this.obj).subscribe((res) => {
      console.log("the delete res user is ====>", res);
      this._router.navigate(['listUser']);
    }, (err) => {
      console.log("the delete user err is ===>", err);
    })
  }
}
