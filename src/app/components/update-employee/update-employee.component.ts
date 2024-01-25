import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Employee } from 'src/app/Employee';

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
  selector: 'app-updateuser',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee?: Employee
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getEmployeeByID(id).subscribe(data => {
      this.employee = data
      console.log(this.employee)
    })
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required , emailValidator]),
    nrc: new FormControl('', [Validators.required , nrcValidator]),
    interest: new FormControl('', [Validators.required])
  })

  update(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateEmployee(this.employee?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/employees']);
  }

}