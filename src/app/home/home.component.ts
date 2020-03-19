import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	// formVar : FormGroup;

  values = [];

	dataArr = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: ''
  };

  constructor(private fb: FormBuilder) { }
  
  
  ngOnInit() {
  	
  }
 
  onSubmit(){
  	// console.log(this.formVar);
    this.values.push(this.dataArr); 
    console.log(this.dataArr); 
    this.dataArr = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: ''
  };
    
  }	
}
