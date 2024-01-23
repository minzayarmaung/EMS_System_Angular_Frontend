import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-viewusers',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

employees: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
    })
  }

  deleteEmployee(id: number){
    this.service.deleteEmployee(id).subscribe(data => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id
  ])
    setTimeout(()=>{
      window.location.reload();
    } , 100);
    
  }
  filterChange:string = "" // This line is for Searching and Flitering the Data
}