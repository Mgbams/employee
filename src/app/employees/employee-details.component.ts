import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {
employee: Employee;
private _id: number;
  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    //const id = +this._route.snapshot.params['id']; // The plus converts the returned value to a number
     //this._id = +this._route.snapshot.paramMap.get('id'); 
    this._route.paramMap.subscribe(params => {
      console.log(params);
      this._id = +params.get('id');
       console.log(this._id );
       //this.employee = this._employeeService.getEmployeeById(this._id); // used for array in client side
        //console.log(this.employee);
        this._employeeService.getEmployeeById(this._id).subscribe(
        (employee) => this.employee = employee,
        (error: any) => console.log(error)
      )
    }); 
   
  }

  viewNextEmployee() {
    if ( this._id < 3) {
      this._id =  this._id  + 1;
    } else {
      this._id =  1;
    }
    
    this._router.navigate(['/employee', this._id], {
       queryParamsHandling:"preserve"
    });
  }

}
