import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

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
    email: new FormControl('', Validators.required ),
    nrc: new FormControl('', Validators.required ),
    interest: new FormControl('',  )
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addEmployee(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}