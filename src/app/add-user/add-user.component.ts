import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm:FormGroup
  data:any = [];

  constructor(
    public _router: Router,
    public _userService: UserService
    ) { 
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobileNo: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
  }

  addUser(value){
    console.log("the alldata is te =====>", value);
    this._userService.addUser(value).subscribe((res:any) => {
      console.log("the correct response is ====>", res);
      this._router.navigate(['listUser']);
    }, (err) => {
      console.log("the error is the ===>", err);
    });
  }
}
