import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  isActive = true;
  department = 3;
  dateOfBirth: Date = new Date(2018, 0, 30); // default date
  previewPhoto = false;
  photoPath: "";
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
  constructor() {
        // create new object on each property change
    // so Angular can catch object reference change
    this.datePickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue', 
      showWeekNumbers: false,
      minDate: new Date(2018, 0, 1), // 0 is for january
      maxDate: new Date(2018, 11, 31),  // 11 is for december
      dateInputFormat: 'MM/DD/YYYY'
    });
   }

  ngOnInit(): void {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }

  togglePreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
