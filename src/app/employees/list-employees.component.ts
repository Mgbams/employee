import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
     {
        id: 1,
        name: "John",
        gender: 'Male',
        email: 'john@gmail.com',
        contactPreference: 'Email',
        dateOfBirth: new Date('10/12/1988'),
        department: 'IT',
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
        department: 'Sales',
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
        department: 'HR',
        isActive: true,
        photoPath: 'assets/images/mary.jpg'

      }
  ];

  constructor() { }

  ngOnInit(): void {
  };

}
