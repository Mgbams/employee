import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  //searchTerm: string;
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchedTerm: string) {
     return this.employees.filter(employee =>
            employee.name.toLocaleLowerCase().indexOf(searchedTerm.toLocaleLowerCase()) !== -1);
  }
  // dataFromChild: Employee; //used it to store data when using output decorator from the child component
  // employeeToDisplay: Employee;
  // private arrayindex = 1;
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
  
   }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees = this.employees;
    console.log(this._route.snapshot.queryParamMap.has('searchTerm'));
    console.log(this._route.snapshot.queryParamMap.get('searchTerm'));
    console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
    console.log(this._route.snapshot.queryParamMap.keys);
    console.log(this._route.snapshot.paramMap.keys);
    // this.employeeToDisplay = this.employees[0];
  };

  onClick(employeeId: number) {
    this._router.navigate(['/employee', employeeId], {
      queryParams: {
        'searchTerm': this.searchTerm,
        'testParam': 'testValue'
      }
    });
  }

  changeEmployeeName() {
    this.employees[1].name = 'Jordan';
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
    // const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    // newEmployeeArray[1].name = 'jordan';
    // this.employees = newEmployeeArray;
  }

  onMouseMove() {

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


