import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.sass']
})
export class DisplayEmployeeComponent implements OnInit {
 
  constructor() { }
   @Input() employee: Employee;
   
  ngOnInit(): void {
  }

}
