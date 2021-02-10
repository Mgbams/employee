import { Injectable } from "@angular/core";
//import { Observable, of} from 'rxjs';
import { Employee } from "../models/employee.models";
import {Observable, throwError} from 'rxjs';
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { catchError } from 'rxjs/operators';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) {}
    private listEmployees: Employee[] = [
     {
        id: 1,
        name: "John",
        gender: 'Male',
        email: 'john@gmail.com',
        contactPreference: 'Email',
        dateOfBirth: new Date('10/12/1988'),
        department: '3',
        isActive: true,
        photoPath: 'assets/images/john.jpg'
      },
      {
        id: 2,
        name: "Mark",
        gender: 'Male',
        email: 'mark@gmail.com',
        phoneNumber: 7888888894,
        contactPreference: 'phone',
        dateOfBirth: new Date('06/12/1992'),
        department: '1',
        isActive: true,
        photoPath: 'assets/images/mark.jpg'
      },
      {
        id: 3,
        name: "Mary",
        gender: 'Female',
        email: 'mary@gmail.com',
        contactPreference: 'Email',
        dateOfBirth: new Date('10/1/2000'),
        department: '2',
        isActive: true,
        photoPath: 'assets/images/mary.jpg'

      }
    ];

    getEmployees(): Observable<Employee[]> {
        // return of(this.listEmployees).pipe(
        //   delay( 2000 )
        // );
        // To use the link at localhost:3000, make sure the fake api at that location is active by running
        // the below command in your terminal:  json-server --watch db.json
        return this.httpClient.get<Employee[]>(this.baseUrl)
                                 .pipe(catchError(this.handleError));
    }

    getEmployeeById(employeeId: number): Observable<Employee> {
       // return this.listEmployees.find(e => e.id === employeeId); // this is for array on client side
       return this.httpClient.get<Employee>(`${this.baseUrl}/${employeeId}`).pipe(catchError(this.handleError))
    }

    private handleError(errorResponse: HttpErrorResponse) {
      if(errorResponse.error instanceof ErrorEvent) {
        //Meaning it is a client side error or a network error
        console.error('Client side error', errorResponse.error.message);
      } else {
        //Meaning it is a server side error 
        console.error('Server side error', errorResponse);
      }
      
      return throwError("There is a problem with the service. We are notified and working on it. Please try again later!")
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(this.baseUrl, employee, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }).pipe(catchError(this.handleError))  
    }

    updateEmployee(employee: Employee): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }).pipe(catchError(this.handleError))
    }

    delete(id: number): Observable<void> {
       return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
    }

    //Woking without observables

    /* delete(id: number){
     const i = this.listEmployees.findIndex(e => e.id == id);
      if(i !== -1) {
        this.listEmployees.splice(i, 1);
      } 
    } */
   /*    getEmployees(): Employee[] {
        return this.listEmployees;
    } */

    // Method for saving and updating in an array
   /*   save(employee: Employee) {
      if(employee.id === null) {
        //this.listEmployees.push(employee);
        const maxid = this.listEmployees.reduce(function(e1, e2) {
            return (e1.id > e2.id) ? e1 : e2;
          }).id;
          employee.id = maxid + 1;
      } else {
        const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
        this.listEmployees[foundIndex] = employee;
      } */

       // Method for getting employee by id in an array on client side
      /* getEmployeeById(employeeId: number): Employee {
       return this.listEmployees.find(e => e.id === employeeId); // this is for array on client side
     } */
}