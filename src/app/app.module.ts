import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudModule } from './stud/stud.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudModule,
    FormsModule
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
