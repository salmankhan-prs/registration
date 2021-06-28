import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent,LoginComponent],
  exports:[RegisterComponent,LoginComponent],
  imports: [
    CommonModule,  
    FormsModule
  ]
})
export class StudModule { }
