import { Injectable } from "@angular/core";
//import { Observable, of} from 'rxjs';
import { Employee } from "../models/employee.models";
import {Observable} from 'rxjs';
import { of } from "rxjs";
import { delay } from "rxjs/operators";



@Injectable()
export class EmployeeService {
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
        return of(this.listEmployees).pipe(
          delay( 2000 )
        );
    }

     getEmployeeById(employeeId: number): Employee {
        return this.listEmployees.find(e => e.id === employeeId);
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    }

    //Woking without observables
   /*    getEmployees(): Employee[] {
        return this.listEmployees;
    } */
}