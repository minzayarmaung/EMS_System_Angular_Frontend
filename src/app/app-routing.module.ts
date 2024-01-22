import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { HomeComponent } from './components/home/home.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: ViewEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'update/:id', component: UpdateEmployeeComponent} 
  // We need to update/:id as we need to get the id of the employee and match the URL(Important Part !) 
];


@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
