import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


// NRC Validator Checking Function 
function nrcValidator(control: AbstractControl) : ValidationErrors | null {

  // Define the NRC Number Pattern
  const nrcPattern = /^[0-9]{1,14}\/[a-zA-Z]{2}[a-zA-Z]{2}[a-zA-Z]{2}\([NTRD]\)[0-9]{6}$/;

  // Check if the Value matches the pattern :3
  return nrcPattern.test(control.value)? null : {invalidNrc:true};
}

// Email Validator Checking Function
function emailValidator(control: AbstractControl) : ValidationErrors | null {
  // Define the Email Pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the value matches the Pattern
  return emailPattern.test(control.value)? null : {invalidEmail:true};
}

@Component({
  selector: 'app-adduser',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private service: AppService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    name: new FormControl('', Validators.required ),
    email: new FormControl('', [Validators.required , emailValidator] ),
    nrc: new FormControl('', [Validators.required , nrcValidator] ),
    interest: new FormControl('',)
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addEmployee(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/employees']);
  }
}