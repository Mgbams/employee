import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {Employee} from '../models/employee.models';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm; //using viewchild()
  
  panelTitle: string;
  datePickerConfig: Partial<BsDatepickerConfig>;
  /* isActive = true;
  department = 3;
  dateOfBirth: Date = new Date(2018, 0, 30); // default date */
  previewPhoto = false;
  employee: Employee;
  departments: Department[] = [
    {
      id: 1,
      name: "Help Desk"
    },
    {
      id: 2,
      name: "HR"
    },
     {
      id: 3,
      name: "IT"
    },
     {
      id: 4,
      name: "Paroll"
    },
     {
      id: 5,
      name: "Admin"
    }

  ];
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
        // create new object on each property change
    // so Angular can catch object reference change
    this.datePickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue', 
     /*  showWeekNumbers: false,
      minDate: new Date(2018, 0, 1), // 0 is for january
      maxDate: new Date(2018, 11, 31),  // 11 is for december
      dateInputFormat: 'MM/DD/YYYY' */
    });
   }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: null,
        phoneNumber: null,
        contactPreference: null,
        dateOfBirth: null,
        department: '-1',
        isActive:  null,
        photoPath: null,
        password: null,
        confirmPassword: null
      };
      this.panelTitle = "Create employee";
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = "Edit employee";
      this.employee = Object.assign({}, this._employeeService.getEmployeeById(id));
    }
  }

  saveEmployee(): void {
    //console.log();
    const newEmployee: Employee = Object.assign({}, this.employee); 
    console.log( newEmployee);
    this._employeeService.save(newEmployee);
    //empForm.reset(); //Reset your form before the navigation command
    this.createEmployeeForm.reset();
    this._router.navigate(['list']);
  }

  togglePreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
