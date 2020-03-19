import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isData:boolean = true;
  allData:any = [];
  demo:any;
  id:any;
  obj:any;
  updating = localStorage.getItem("updatingOBJ");

  constructor(private router: Router) {
  }
  
  ngOnInit() {
    this.allData = JSON.parse(localStorage.getItem("allData"));
    this.obj = this.allData[this.updating]
  }

  editMessage(){
    this.allData[this.updating] = this.obj;
    localStorage.setItem("allData", JSON.stringify(this.allData));
    this.router.navigate(['/list'])
  }
}
