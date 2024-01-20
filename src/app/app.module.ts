import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { HomeComponent } from './components/home/home.component';
import { FilterpipePipe } from './filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    HomeComponent,
    FilterpipePipe,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
