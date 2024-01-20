import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Employee } from 'src/app/Employee';

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
    email: new FormControl('', [Validators.required]),
    nrc: new FormControl('', [Validators.required]),
    interest: new FormControl('', [Validators.required])
  })

  update(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateEmployee(this.employee?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}