import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  searchTerm: string;
  // dataFromChild: Employee; //used it to store data when using output decorator from the child component
  // employeeToDisplay: Employee;
  // private arrayindex = 1;
  constructor(private _employeeService: EmployeeService, private _router: Router) {
  
   }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    // this.employeeToDisplay = this.employees[0];
  };

  onClick(employeeId: number) {
    this._router.navigate(['/employee', employeeId]);
  }

  changeEmployeeName() {
    //this.employees[0].name = 'Jordan';
    const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    newEmployeeArray[1].name = 'jordan';
    this.employees = newEmployeeArray;
  }
  
  //used it to get data when using output decorator from the child component
 /*  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  } */

  // nextEmployee(): void {
  //   if (this.arrayindex <= 2) {
  //     this.employeeToDisplay = this.employees[this.arrayindex];
  //     this.arrayindex++;
  //   } else {
  //      this.employeeToDisplay = this.employees[0];
  //      this.arrayindex = 1;
  //   }
  // }

}


