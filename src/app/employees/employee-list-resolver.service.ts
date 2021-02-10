import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Employee } from "../models/employee.models";
import { EmployeeService } from "./employee.service";
import { ResolvedEmployeeList } from "./resolved-employee-list.model";
import { catchError, map } from 'rxjs/operators';

@Injectable()
/* export class EmployeeListResolverService implements Resolve<ResolvedEmployeeList> {
    constructor(private _employeeService: EmployeeService) {

    }

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeeList> {
         return this._employeeService.getEmployees()
         .pipe(
             map((employeeList) => new ResolvedEmployeeList(employeeList)),
             catchError((err: any) => {
                  return of(new ResolvedEmployeeList(null, err));
             })
        );
     };
}
 */

 // If you don't want to create a model like we did above, you can also use this method below
export class EmployeeListResolverService implements Resolve<Employee[] | string> {
    constructor(private _employeeService: EmployeeService) {

    }
     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {
         return this._employeeService.getEmployees()
         .pipe(
             catchError((err: string) => {
                  return of(err);
             })
        );
     };
}



/*  import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.models";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[]> {
    constructor(private _employeeService: EmployeeService) {

    }

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
         return this._employeeService.getEmployees();
     };
} */