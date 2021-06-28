import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }
  users:User[]=[
    new User("abc","1234"),
    new User("xyz","111"),
    new User("raju","222"),
    new User("sita","444")
  ];

  checkValidate(un:any,pwd:any):boolean{
    var count=0;
    for(var i=0;i<this.users.length;i++){
      if(this.users[i].username==un && this.users[i].password==pwd){
          count++;
      }
    }
    if(count!=0){
      return true;
    }
    else{
      return false;
    }
  }
}
