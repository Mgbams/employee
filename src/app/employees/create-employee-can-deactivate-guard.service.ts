import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";

export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent):  boolean {
        return true;
    };
}