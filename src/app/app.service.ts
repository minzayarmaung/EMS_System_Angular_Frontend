import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add User - Create
  addEmployee(user: Employee){
    return this.http.post<Employee>(`${this.url}add`, user)
  }

  // Get Users - Read
  getEmployees(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'all_employees')
  }

  // Get User by Id - Read
  getEmployeeByID(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.url}employee/${id}`)
  }

  // Update User - Update
  updateEmployee(id?: number ,user?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, user)
  }

  // Delete User - Delete
  deleteEmployee(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

}