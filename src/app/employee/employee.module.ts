import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { 
  id?:any;
  name?:string;
  email?:string;
  nrc?:string;
  interest?:string;
}
