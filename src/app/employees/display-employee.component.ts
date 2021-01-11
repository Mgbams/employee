import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.sass']
})
export class DisplayEmployeeComponent implements OnInit{
  
  @Input() employee: Employee;
  selectedEmployeeId: number;
  constructor(private _route: ActivatedRoute) { }

  getEmployeeNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

  //This is used to pass data through output decorator
  // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  // handleClick() {
  //   this.notify.emit(this.employee);
  // }
  //passing data through output decorator ends here

  // Using property setter and ngOnChanges on multiple inputs starts here
  /* private _employeeId: number;
   @Input() 
   set employeeId(val: number) {
     //Note val is the incoming change
     console.log('employeeId changed from ' + JSON.stringify(this._employeeId) + ' to ' + JSON.stringify(val));
     this._employeeId = val;
   }

   get employeeId() {
     return this._employeeId;
   }

   private _employee: Employee;
   @Input() 
   set employee(val: Employee) {
    //console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));  // must always appear first in our code
    //console.log('Current : ' + val.name);
    console.log('employee changed from ' + JSON.stringify(this._employee) + ' to ' + JSON.stringify(val));
     this._employee = val;
   }

   get employee(): Employee {
     return this._employee;
   } */
   
  ngOnInit(): void {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  /* ngOnChanges(changes: SimpleChanges) {
    for (const propName of Object.keys(changes)) {
      //console.log(propName);

      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);

      console.log(propName + ' changed from ' + from + ' to ' + to);
    }
  }
 */
}



//Using ngOnChanges example starts here
/* import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Employee } from '../models/employee.models';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.sass']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
 
  constructor() { }
   @Input() employee: Employee;
   
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // This method is called everytime an input property of this component changes
    //console.log(changes);
    const previousEmployee = <Employee>changes.employee.previousValue; //type casting using <Employee>
    const currentEmployee = <Employee>changes.employee.previousValue;

    console.log('previous Employee :' + (previousEmployee? previousEmployee.name : 'NULL'));
    console.log('current Employee :' + currentEmployee? currentEmployee.name : 'NULL');
    
  }


  // ngOnChanges lifecycle hook for multiple inputs

   @Input() employeeId: number;
   private _employee: Employee;
   @Input() 
   set employee(val: Employee) {
     console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));  // must always appear first in our code
    console.log('Current : ' + val.name);
     this._employee = val;
   }

   get employee(): Employee {
     return this._employee;
   }

   ngOnChanges(changes: SimpleChanges) {
    for (const propName of Object.keys(changes)) {
      //console.log(propName);

      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);

      console.log(propName + ' changed from ' + from + ' to ' + to);
    }
  }

}
 */