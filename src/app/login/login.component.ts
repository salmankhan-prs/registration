import { Component,Inject, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(LoginserviceService)private u_service:LoginserviceService) { }

  user:string=""
   password:string=""
   result:string=""

  ngOnInit(): void {
  }
  
  checkLogin()
  {
    if(this.u_service.checkValidate(this.user,this.password)){
      this.result="Login Success";
    }
    else{
      this.result="Login Failure";
    }
  }
  
 
}
