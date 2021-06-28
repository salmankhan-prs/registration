import { Component, OnInit } from '@angular/core';

import { regStudent } from './regstudent';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  slist:regStudent[]=[
    new regStudent("David","david@gmail.com","9876543210","12345")
  ];
  
  ngOnInit(): void {
  }
 
  s:regStudent=new regStudent(null,null,null,null);

  insertStudent()
  {
    this.slist.push(new regStudent(this.s.sname,this.s.email,this.s.mobile,this.s.password));
    this.s.sname=null;
    this.s.email=null;
    this.s.mobile=null;
    this.s.password=null;
  }

}
