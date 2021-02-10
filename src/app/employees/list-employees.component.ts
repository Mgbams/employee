import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolvedEmployeeList } from './resolved-employee-list.model';
import { stringify } from '@angular/compiler/src/util';
@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  error: string;
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
    //This is used when resolved-emploee-list.model.ts is used in employee-list-resolver.service.ts
     //const resolvedEmployeeList: ResolvedEmployeeList = this.employees = this._route.snapshot.data['employeeList']; // This displays prefetched data using route resolver
    /*  if(resolvedEmployeeList.error === null) {
       this.employees = resolvedEmployeeList.employeeList;
     } else {
       this.error = resolvedEmployeeList.error;
     } */

    const resolvedData: Employee[] | string = this.employees = this._route.snapshot.data['employeeList']; 
    if(Array.isArray(resolvedData)) {
       this.employees = resolvedData;
     } else {
       this.error = resolvedData;
     }
     if( this._route.snapshot.queryParamMap.get('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      } else {
      this.filteredEmployees = this.employees;
      }  
  }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees(); //without observable
   /*  this._employeeService.getEmployees().subscribe((empList) => {
      this.employees = empList;
      if( this._route.snapshot.queryParamMap.get('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      } else {
      this.filteredEmployees = this.employees;
      }
    }); */
    console.log(this._route.snapshot.queryParamMap.has('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.get('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.keys);
    // console.log(this._route.snapshot.paramMap.keys);
    // this.employeeToDisplay = this.employees[0];
    
  };

 /*  onClick(employeeId: number) {
    this._router.navigate(['/employee', employeeId], {
      queryParams: {
        'searchTerm': this.searchTerm,
        'testParam': 'testValue'
      }
    });
  } */

  changeEmployeeName() {
    this.employees[1].name = 'Jordan';
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
    // const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    // newEmployeeArray[1].name = 'jordan';
    // this.employees = newEmployeeArray;
  }

  onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id == id);
      if(i !== -1) {
        this.filteredEmployees.splice(i, 1);
      }
  }

 /*  onMouseMove() {

  }
   */
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


