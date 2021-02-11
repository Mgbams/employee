# AngularCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Resources

For your angular loading indicators, visit:
[Loading indicator](https://loading.io/css)
The little modifications to the css file of these loaders are

1. change the background colour from white to the colour you wish
2. change position from relative to fixed
   If you need center it on the page, then add these below
3. top: 50%
4. Left: 50%

To see a list of available resources we can use in our projects, visit
[resources](https://angular.io/resources?category=development)

## Prerequisite

- Angular cli

```bash
npm install -g @angular/cli
```

OR to upgrade the cli, use

```bash
npm install -g @angular/cli@latest
```

To check version of cli, we use

```bash
ng version
```

- Node Js
  To check version of node, we use

```bash
node -v
```

- Bootstrap (optional)

* Code editor e.g VsCode

## Create your project by running the command

```bash
ng new ProjectName --skip-tests true
```

To see a list of files the ng new command will create without actually creating them, we can use

```bash
ng new ProjectName -d //d starts for dry run
```

**NOTE**: --skip-tests true was used to remove tests files but shouldn't be used for a proper project as you need tests files in your project

After creation of project,

```bash
cd ProjectName   //This changes to the new project directory
code .   //This opens it in vscode
```

## Install ngx-bootstrap

```bash
$ npm install ngx-bootstrap --save
$ npm install bootstrap@3  --save
```

OR you could install bootstrap alongside jquery as

```bash
$ npm install bootstrap@3 jquery --save
```

Add bootstrap to **angular.json** file under the styles section as shown below

```json
"styles": [
 "node_modules/bootstrap/dist/css/bootstrap.min.css",
 "src/styles.css"
]
```

To Add Jquery to **angular.json** file under the **scripts** section, we configure as shown below:

```json
"scripts": [
   "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

E.g To use a datepicker module from ngx-bootstrap, you can import it as follows

```ts
//app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //necessary import
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//Add both to imports section and call forRoot() method on BsDatepickerModule
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
```

Then in **angular.json** file, add the ngx-bootstrap css and the datepicker css in the styles section. You will need add the css of other imported components if you do import other components like accordion e.t.c

```json
//angular.json
 "styles": [
    "src/styles.sass",
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/ngx-bootstrap/datepicker/bs-datepicker.css"
  ],
```

To use the ngx-bootstrap datepicker in your component.html, see example below

```html
//The type is defined as text to avoid using the default date type of html // We
add bsDatepicker as a property of the input to call the datepicker component
here
<input
  type="text"
  bsDatepicker
  id="dateOfBirth"
  name="dateOfBirth"
  ngModel
  class="form-control"
/>
```

**NOTE:** bsDaterangepicker is for a date range while bsDatepicker is for a single date picker. So choosewhich to use as you desire
After this modifications, stop your server and re-run it.

To modify the default configuration of datepicker, you import this into your component.ts

```ts
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
```

## Generating a component

```bash
// ng g c folderName/componentName  --skip-tests=true --flat=true //all starts in small letters and are in plural
$ ng g c employee/create-employee --skip-tests=true --flat=true
//skip-tests=true is used to make sure a test file is not created. But shouldnt be used in a true project
```

## Property 'propertyName' has no initializer and is not definitely assigned in the constructor Error messages

Open **tsconfig.json** and under **compilerOptions**, set **"strict": "false"**

## Interpolation and databinding

Interpolation is used to display our data e.g {{}}
databinding is used for changing outputs e.g <img [src]="" />. The square bracket around the src attribute helps handle changings of the source image

## If you declare an attribute as a number then you must not start it with Zero

e.g
phoneNumber: number;
phoneNumber: 098765544456 // WRONG
phoneNumber: 98765556665 //RIGHT

## Using centralized routing,

- open a**pp.modules.ts** and import router module e.g
  import { RouterModule, Routes } from '@angular/router';

- Add it to imports as shown below:

```ts
imports: [
RouterModule,
],
```

- Then define the routes for your components e.g

```ts
const appRoutes: Routes = [
  { path: "list", component: ListEmployeesComponent },
  { path: "create", component: CreateEmployeeComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" }, //default path
];
```

- Then in your **app.module.ts** pass this routes created to your RouterModule under the imports section as shown below. Use the forRoot method of RouterModule

```ts
imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), //pass your created routes here
    AppRoutingModule
  ],
```

## To launch the app

```bash
ng serve --open

// OR
ng s -o
```

## Making Links with RouterLink

e.g

```html
<li>
  <a routerLink="create">Create</a>
</li>
```

## Add router-outlet to your app.component.html to enable routing

```html
<router-outlet></router-outlet>
```

## when you change the base href url in your index.html, you should specify that basehref the next time you want to launch your project for it to work e.g

index.html

```html
<base href="/" /> // by default
```

I changed it to

```html
<base href="/emp/" />
```

So for my application to work , i need stop my server, here locally i press ctrl + c and then restart it with

```bash
 -- ng serve -o --base-href /emp/
```

Note that i specified the base-href using the --base-href flag

## ng build --prod --base-href /emp/

## Forms

To use forms in your project, import FormsModule into your app.module.ts and add the module inside the imports section

```ts
import { FormsModule } from '@angular/forms'; //template driven form
import { ReactiveFormsModule } from '@angular/forms'; //reactive forms

imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
```

- Template Driven forms
- Model Driven Forms (Commonly called Reactive forms)

## Template Driven forms

The inputs must have an ngModel attribute and the form element must have an ngForm assigned to an id that references it e.g

```html
<form #employeeForm="ngForm" (ngSubmit)="saveEmployee(employeeForm)">
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Create Employee</h3>
    </div>

    <div class="panel-body">
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          ngModel
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          ngModel
          class="form-control"
        />
      </div>
    </div>
    <div class="panel-footer">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </div>
</form>
```

**IMPORTANT** When you use databinding in your html e.g [(ngModel)]="gender", you are binding to the gender variable declared in your .ts file and you should declare the default value for gender there e.g

```html
<input
  type="radio"
  value="gender"
  id="gender"
  name="gender"
  ngModel
  [(ngModel)]="gender"
/>
```

Then in your component.ts file

```ts
gender = "male";
```

And when you bind to a checkbox or a radio button this way that means you are checking it by default.

But when you're not binding, it's enough to use just **ngModel** in your input e.g

```html
<input
  type="text"
  id="phoneNumber"
  name="phoneNumber"
  ngModel
  class="form-control"
/>
```

**NOTE:** I can use interpolation on my page to see the contents of the forms when i type into it as shown below: employeeForm is the id on the form element.
{{ employeeForm.value | json }}

- In our component.ts, we import NgForm and create the corresponding submit function we are calling from our form e.g

```ts
import { NgForm } from '@angular/forms';

saveEmployee(empForm: NgForm): void {
console.log(empForm.value);
}
```

**NOTE** The function employeeForm is called by refernce and not invoked i. e
**(ngSubmit)="saveEmployee(employeeForm)**

## By Default Browser validation is disabled after angular 2

Angular now adds novalidate to a form tag making browser validation not to work. e.g
If you add a required attribute of an input element, it will not work because when our form is generated, we see a novalidate attribute added to it when we view it through the console. But if you wish to enable browser validation by default, then add this module to your form i.e

```html
<form ngNativeValidate>
  //This now will work
  <input name="fullname" type="tex" required />
</form>
```

To disable browser validation in angular 2, add novalidate to the form tag i.e

```html
novalidate
```

## Form validation

We validate forms around the following

- touched: When you've touched the form element and it activates when the element looses focus
- untouched: when the element has not yet received focus it is untouched
- pristine: when the element has not been changed
- dirty: when the element has been changed then it is true
- valid: it is true when the element has a content
- invalid: it is false when the element is empty

> To validate a form element, add a reference to it and assign it to ngModel. the reference name must be unique in the form, so i usually adding control to the name e.g

```html
<input
  required
  type="text"
  id="fullName"
  name="fullName"
  ngModel
  #fullNameControl="ngModel"
  class="form-control"
/>

<div>touched: {{ fullNameControl.touched }}</div>
<div>Untouched: {{ fullNameControl.untouched }}</div>
```

From the above, i added #fullNameControl="ngModel" to the input field to reference firstname input and below it i checked if it has been touched or untouched using its reference i.E

```html
{{ fullNameControl.touched }}
```

**STEPS**

- Include the HTML5 validation attribute such as required e.g

```html
<input required type="text" id="fullName" name="fullName" ngModel required />
```

- export ngModel directive to a local template variable e.g **#fullNameControl="ngModel"**

```html
<input
  required
  type="text"
  id="fullName"
  name="fullName"
  required
  ngModel
  #fullNameControl="ngModel"
/>
```

- Use the local template variable to access the validation properties (touched, untouched, valid, invalid, pristine, dirty) e.g

```html
{{ fullNameControl.untouched }}
```

## Bootstrap classes for handling error

- has-error
- control-label
- help-block
- has-success
  e.g My basic usage of the error classes

```html
<div
  class="form-group"
  [class.has-error]="fullNameControl.invalid && fullNameControl.touched"
>
  <label for="fullName" class="control-label">Full Name</label>
  <input
    required
    type="text"
    id="fullName"
    name="fullName"
    ngModel
    #fullNameControl="ngModel"
    class="form-control"
  />
  <span
    class="help-block"
    *ngIf="fullNameControl.invalid && fullNameControl.touched"
    >invalid email</span
  >
</div>
```

## Two ways of validating email

- pattern validator
  using pattern example

```html
<input
  type="text"
  id="email"
  name="email"
  required
  pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-A0-9-.]+$"
  ngModel
  [(ngModel)]="employee.email"
  #email="ngModel"
  class="form-control"
/>
<span class="help-block" *ngIf="email.errors?.required && email.touched"
  >Email is required</span
>
<span class="help-block" *ngIf="email.errors?.pattern && email.touched"
  >Invalid Email</span
>
```

- email validator

  using email validator example

  ```html
  <input
    type="text"
    id="email"
    name="email"
    required
    email
    ngModel
    [(ngModel)]="employee.email"
    #email="ngModel"
    class="form-control"
  />
  <span class="help-block" *ngIf="email.errors?.required && email.touched"
    >Email is required</span
  >
  <span class="help-block" *ngIf="email.errors?.email && email.touched"
    >Invalid Email</span
  >
  ```

  ## Resetting your form when it is submitted

  1. Add the reset method on the form e.g
     **NOTE**: Add **templateReferenceVariable.reset()** to your form. Where template ReferenceVariable is the variable that represents your form. From below i called it **#employeeForm** so it will become **employeeForm.reset()**

  ```html
  <form
    ngNativeValidate
    #employeeForm="ngForm"
    (ngSubmit)="saveEmployee()"
    employeeForm.reset()
  ></form>
  ```

2.  OR you can reset it from your class which should be your prefered option i.e

```html
<form
  ngNativeValidate
  #employeeForm="ngForm"
  (ngSubmit)="saveEmployee(employeeForm)"
></form>
```

```ts
import { NgForm } from '@angular/forms';

saveEmployee(empForm: NgForm): void {
  //save it to your database: put the code here
  empForm.reset(); //Reset your form before the navigation command
   //navigate to another page after saving: put your code here
}
```

3.  OR you can use ViewChild method as shown below i.e

```html
<form
  ngNativeValidate
  #employeeForm="ngForm"
  (ngSubmit)="saveEmployee()"
></form>
```

```ts
import { NgForm } from '@angular/forms';
@ViewChild('employeeForm') public createEmployeeForm: NgForm;

saveEmployee(): void {
  //save it to your database: put the code here
  this.createEmployeeForm.reset(); //Reset your form before the navigation command

   this.createEmployeeForm..reset({
    name: 'testName',
    contactPreference: 'phone'
  }); // Setting value by default on form reset

   //navigate to another page after saving: put your code here
}
```

## ngValue vs value properties

The required attribute on a select item that has some validation written for it will only work when the deafult selected option is null and we set it to null using the ngValue syntax below

Basic usage of ngValue could be to set the default option of a select option e.g

```html
<option [ngValue]="null">Select department</option>
```

Other usage examples include:

```html
//value usage: This will give you the id of the selected item
<option *ngFor="let department of departments" [value]="department.id">
  {{department.name}}
</option>

//ngValue usage: This will give you an object collection of the selected item

<option *ngFor="let department of departments" [ngValue]="department">
  {{department.name}}
</option>
```

## Custom Validator

- Create a shared folder, create your directive file in your shared folder with an extension of directive.ts e.g email-validator.directive.ts
- write your logic in it
  e.g

```ts
import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
  selector: "[appSelectDirective]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectRequiredValidatorDirective,
      multi: true /*to tell angular tha we want to add our validator to the lists of validators maitained by angular*/,
    },
  ],
})
export class SelectRequiredValidatorDirective implements Validators {
  //It returns null when the validation succeeds.
  //It returns an object of key and value if the validation fails
  //control represents the element that is being passed into this directive for validation
  // When using customer validator we don't need required attribute on our html element
  //import it to your app.module.ts
  // register it under declaration in app.module.ts
  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === "-1" ? { defaultSelected: true } : null;
  }
}
```

- import it into **app.module.ts**

```ts
import { SelectRequiredValidatorDirective } from "./shared/select-required-validator.directive";
```

- Add it under the declaration section of **app.module.ts** e.g

```ts
declarations: [
 SelectRequiredValidatorDirective
],
```

- Use the directive selector on your html element that is to be validated

```html
<select appSelectDirective>
  <option ngValue="-1">Select department</option>
  <option *ngFor="let department of departments" [value]="department.id">
    {{ department.name }}
  </option>
</select>
<span
  class="help-block"
  *ngIf="department.touched && department.errors?.defaultSelected"
>
  Department is required
</span>
```

## Password and confirm password are examplesof cross-field validation

We can achieve their validation using custom-directive validation technique

## Binding to change and input event

- Binding to change event only gets the action triggered when the element has lost focus I.e either clicking on another elment or tabbing out of the element e.g

```html
<input
  required
  type="text"
  id="password"
  name="password"
  (change)="confirmPassword.control.updateValueAndValidity()"
/>
```

- Binding to an input event gets triggered as we are typing directly into the element e.g

```html
<input
  required
  type="text"
  id="password"
  name="password"
  (input)="confirmPassword.control.updateValueAndValidity()"
/>
```

## First approach to password Validation; second approach is done on the form using ngModelGroup

```html
<div
  ngModelGroup="passwordGroup"
  #passwordGroup="ngModelGroup"
  [class.has-error]="
          confirmPassword.invalid &&
          confirmPassword.touched &&
          !confirmPassword.errors?.required
        "
>
  <div
    class="form-group"
    [class.has-error]="password.invalid && password.touched"
  >
    <label for="name" class="control-label">Password</label>
    <input
      required
      type="text"
      id="password"
      name="password"
      (input)="confirmPassword.control.updateValueAndValidity()"
      ngModel
      [(ngModel)]="employee.password"
      #password="ngModel"
      class="form-control"
    />
    <span
      class="help-block"
      *ngIf="password.errors?.required && password.touched"
      >Password is required</span
    >
  </div>

  <div
    class="form-group"
    [class.has-error]="confirmPassword.invalid && confirmPassword.touched"
  >
    <label for="name" class="control-label">Confirm Password</label>
    <input
      required
      type="text"
      id="confirmPassword"
      name="confirmPassword"
      appConfirmEqualValidator="password"
      ngModel
      [(ngModel)]="employee.confirmPassword"
      #confirmPassword="ngModel"
      class="form-control"
    />
    <span
      class="help-block"
      *ngIf="confirmPassword.errors?.required && confirmPassword.touched"
      >confirmPassword is required</span
    >
    <span
      class="help-block"
      *ngIf="
              confirmPassword.errors?.notEqual &&
              confirmPassword.touched &&
              !confirmPassword.errors?.required
            "
      >Confirm password and password do not match</span
    >
  </div>
</div>
```

> NgModelGroup directive is used to create a sub-group within a form.
> It is useful for validating a subgroup of elements within a form.
> useful to group properties of a form model into a nested object.
> The name of the ngModelGroup will become the key for the nested object in the form model.
> the ngModelGroup directive can only be used as a child of NgForm Directive.

## SERVICES

when you create a service you must register it in a module. if it is a service that is to be used by many components then you can register it in app.module.ts under providers. Then import it in the typescript file of your component and inject it in the controller e.g

```ts
//registering EmployeeService  service in app modules app.module.ts
import { EmployeeService } from './employees/employee.service';
providers: [EmployeeService]

// using EmployeeService in my component
import { EmployeeService } from './employee.service';
constructor(private _employeeService: EmployeeService) { }
```

## using route direction from your component

```ts
import { Router } from '@angular/router';
constructor(private _router: Router){}
this._router.navigate(['routeName']);
//Where routeName is the name of your route
```

## switchcase

Switch case in angular is a combination of 3 directives:

- ngSwitch
- ngSwitchCase
- ngSwitchDefault
  Example usage in component.html

```html
<div class="col-xs-6" [ngSwitch]="employee.department">
  <span *ngSwitchCase="1">Help Desk</span>
  <span *ngSwitchCase="2">HR</span>
  <span *ngSwitchCase="3">IT</span>
  <span *ngSwitchCase="4">PayRoll</span>
  <span *ngSwitchDefault>N/A</span>
</div>
```

## Passing Data from PARENT to CHILD with @Input() decorator

```ts
// in the child component.ts
import { modelName} from '../models/employee.models';
@Input() employee: modelName; // here it is assumed a single instance of the model is passed to it at each time and not an array

// in the parent.html
<div class="panel panel-primary" *ngFor="let employee of employees">
 <child-selector [employee]="employee"></child-selector>
</div>
```

To detect and react to a change in an input property value changes, we use either

- Property setter
- ngOnChanges Life Cycle Hook
  These are all used on the CHILD COMPONENT e.g

## ngOnChanges

- import it using

```ts
import { OnChanges, SimpleChanges } from "@angular/core";
```

- implement it on your component class as

```ts
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employee: Employee;

  //In this case, it monitors changes in the input element described above as employee
  ngOnChanges(changes: SimpleChanges) {
    // This method is called everytime an input property of this component changes
    console.log(changes);
    const previousEmployee = <Employee>changes.employee.previousValue; //type casting using <Employee>
    const currentEmployee = <Employee>changes.employee.previousValue;

    console.log(
      "previous Employee :" +
        (previousEmployee ? previousEmployee.name : "NULL")
    );
    console.log("current Employee :" + currentEmployee.name);
  }
}
```

## propertySetter with example

```ts
private _employee: Employee;
   @Input()
   set employee(val: Employee) {
     console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL')); // must always appear first in our code
    console.log('Current : ' + val.name);
     this._employee = val;
   }

   get employee(): Employee {
     return this._employee;
   }
```

Below is the binding on the parent

```html
<app-display-employee [employee]="employeeToDisplay"></app-display-employee>
```

## Differences between ngOnChanges and popertysetter

- With ngOnChanges, we get all the changes instead of just the changes related to a single property.
- ngOnChanges is very useful when multiple inputs to a child component changes

WHILE

- property setter is specific to a particular property and we only get changes of that particular property.
- It is useful when you want to keep track of a single property or when you want to take different actions when different inputs change.

## Transfer data from Child to Parent

This can be achieved b either

- template reference variable
- Output decorator

1. In this case we use an **Output decorator** on the child component e.g

childComponent.ts

```ts
import { EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

 @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  handleClick() {
    this.notify.emit(this.employee.name);
  }
```

childComponent.html

```html
<div class="panel panel-primary" (click)="handleClick()"></div>
```

parentComponent.html

Do an event binding on the attribute that handles the output which in this case is notify

```html
<div *ngFor="let employee of employees">
  <app-display-employee (notify)="handleNotify($event)"></app-display-employee>
</div>
```

**NOTE** The **$event** on the parent's html receives the event payload passed to the **emit** method inside the child's component.ts file.

parentComponent.ts
Define the function in the parent that handles this output. Which should be the same name as the name indicated on the childcomponent selector

```ts
   handleNotify(eventData: string) {

  }
```

2. Here we are using template Reference variable
   this is the simplest approach and is done on the parent component's html file e.g
   STEPS:

- Create the respective method and input decorator in the child's component.ts file e.g

```ts
 @Input() employee: Employee;

 getEmployeeNameAndGender(): string {
   return this.employee.name + ' ' + this.employee.gender;
 }
```

- On the parent's html element, create a reference variable on the child element's selector e.g he we added #childComponent.
  And with this reference we can access the contents of child's componenet.ts file
  parent.html

```html
<h1 #h1Variable></h1>
<div *ngFor="let employee of employees">
  <div
    (click)="h1Variable.innerHTML = childComponent.employee.name + ' ' + childComponent.employee.gender"
  >
    <app-display-employee
      [employee]="employee"
      #childComponent
    ></app-display-employee>
  </div>
</div>
```

## ROUTE GUARDS

There are severaly types of route fuards with different use cases e.g

- CanDeactivate: It guards navigation away from the current route.
- CanActivate: It guards navigation into a route.
- CanActivateChild: it guards navigation into a child route.
- CanLoad: It guards navigation to a feature module loaded asynchronously.

* Resolve: It performs route data retrieval before route activation.

## STEPS TO USE A ROUTE GUARD

- Build the route guard
- Register the guard with angular dependency injection system
- Tie the guard to a route

**Build the route guard**: below is an example of a route guard

```ts
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";

@Injectable()
export class CreateEmployeeCanDeactivateGuardService
  implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm("Are you sure you want to discard your changes ?");
    }
    return true;
  }
}
```

**Registering Route guard**: Open your module.ts file and import your guard, then add it in providers e.g
app.module.ts

```ts
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';

 providers: [CreateEmployeeCanDeactivateGuardService],
```

**Tying the guard to a route:** Here i am tying the guard to create route E.g

```ts
const appRoutes: Routes = [
  {
    path: "create",
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService], //Tying canDeactivate guard
  },
];
```

**NOTE**: canDeactivate route does not work when we are trying to access an external website like google.com, facebook.com e.tc. It does not also work when we type an address directly in our address bar. It also does not work when we click the close button of our window.

## Routes wih parameters

Steps:

- Define the route and add the parameter name to be passes e.g

```ts
  {'path': 'employee/:id', component: EmployeeDetailsComponent},
```

- Pass the parameter to a function in your controller that handles the routing to the needed page e.g

component.html

```html
<!--Here i am passing the id of the employee-->
<div *ngFor="let employee of employees">
  <div (click)="onClick(employee.id)">
    <app-display-employee
      [employee]="employee"
      #childComponent
    ></app-display-employee>
  </div>
</div>
```

- import Router and inject into your constructor, then define the function that handles routing to the page and pass it the parameter e.g

Activating the route in a class

```ts
import { Router } from '@angular/router';
 constructor(private _router: Router) {}
 onClick(employeeId: number) {
    this._router.navigate(['/employee', employeeId]); // passing the parameter
  }
```

OR you can activate the route in a html file by binding to router link E.t.c

```html
<a [routerLink]="['/employees', 2]"></a>
```

## Reading passed parameters

```ts
import {ActivatedRoute } from '@angular/router';

constructor(private _route: ActivatedRoute) { }
ngOnInit(): void {
  //Note the name passed to snapshot.params must be the same as the name passed as parameter during creation of your route. here it is id in both cases
    //params are used for older versions of angular
    const id = +this._route.snapshot.params['id']; // The plus converts the returned value to a number
    // OR from ANGULAR 5 UPWARDS USE paraMap
    const id = +this._route.snapshot.paramMap.get('id');
  }
```

## Normal route to pages from html

For normal routing we don not bind to the routeLink i.e when we are not passing parameters to our link we ue this below e.g

```html
<a routerLink="create">Create</a>
```

## When to use snapshot or observable approach

- IF the route parameter value does not change and you only want to read the initial route parameter value.
  e.g

```ts
employee: Employee;
private _id: number;
constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) { }
this._id = +this._route.snapshot.params['id']; // The plus converts the returned value to a number
OR
this._id = +this._route.snapshot.paramMap.get('id'); // from angular 4 upwards
```

- IF the route parameter value changes, and if you want to react and execute some code in response to that change. e.g

```ts
employee: Employee;
private _id: number;
constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) { }
 this._route.paramMap.subscribe(params => {
  console.log(params);
  this._id = +params.get('id');
    console.log(this._id );
    this.employee = this._employeeService.getEmployeeById(this._id);
    console.log(this.employee);
});
```

## Passing optional parameters to our link

We can pass parameters optionally to our link by following the step below. But note that optionally passed parameters are not declared explicitly in the route definition of our path and we can pass as many parameters as we desire inside a curly braces e.g

```html
<!--Optionally passed parameters-->
<a
  href=""
  class="btn btn-primary"
  [routerLink]="['/list', { id: employee.id, name: employee.name }]"
  >Back to list
</a>
```

Optionally passed parameters appear after semi-colons in a route path e.g

```url
//Here **id** and **name** are optional parameters
http://localhost:4200/list;id=3;name=Mary
```

## Conditionally adding classes

```html
<!--selectedEmployeeId is defined in the component.ts file-->
<div
  class="panel panel-primary"
  [class.panel-success]="selectedEmployeeId === employee.id"
></div>
```

## Differences between Required and optional route parameters

- Required route parameters are part of the route configuration whereas optional route parameters are not.
- Required route parameters are used in pattern matching whereas optional route parameters are not.

* optional route parameters must be passed after the required route parameters if any.
* prefer a required route parameter when the value is simple and mandatory E.g To view a specific employee details, the ID parameter is mandatory and it is a simple integer.
* On the other hand, prefer an optional route parameter when the value is optional and complex.

## using Object.assign() method to make a copy of an object

e.g

I used the Object.assign() method to make a copy of the contents of employee object to avoid loosing its content when i use the reset() method.

```ts
  saveEmployee(): void {
    //console.log();
    const newEmployee: Employee = Object.assign({}, this.employee); // copies the content of employee object and saves it to newEmployee
    this._employeeService.save(newEmployee);
    //empForm.reset(); //Reset your form before the navigation command
    this.createEmployeeForm.reset();
    this._router.navigate(['list']);
  }
```

## FILTERING USING A PIPE

this gives you the steps to filter items on the page
**STEPS**

1. Create a search box on your page e.g

```html
<div class="form-group">
  <input
    type="text"
    class="form-control"
    placeholder="Search By name"
    style="width: 300px"
  />
</div>
```

2. Make a property binding to an attribute that will hold the searched string in your controller. E.g, In my controller, i will define an attribute called searchTerm and i will bind my search input to it using [(ngModel)]="searchTerm" e.g

```ts
searchTerm: string;
```

```html
<div class="form-group">
  <input
    type="text"
    class="form-control"
    placeholder="Search By name"
    style="width: 300px"
    [(ngModel)]="searchTerm"
  />
</div>
```

3. Add a filter pipe i.e | to the items defined on your page and also define your custom filter e.g

```html
<div *ngFor="let employee of employees | employeeFilter: searchTerm"></div>
```

**NOTE:** From the above, i have **| employeeFilter: searchTerm**.

- | : This is the pipe symbol
- employeeFilter: This is the custom filter that will contain the logic to filter the employees.
- searchTerm: this is the attribute in the component.ts that holds the searched terms.

4. Create a filter and note to give it the same name as indicated above that is **employeeFilter** e.g

employee-filter.pipe.ts

```ts
import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../models/employee.models";

@Pipe({
  name: "employeeFilter", // This name here must match with the name on the html form
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: Employee[], searchTerm: string): Employee[] {
    // If the searchterm does not exist or an employee does not match the seach term, then we return the employees displayed by default
    if (!employees || !searchTerm) {
      return employees;
    }
    //else, we convert employees name to lower case and searchterm to lowercase and if searched term is found we return the matched items.
    return employees.filter(
      (employee) =>
        employee.name
          .toLocaleLowerCase()
          .indexOf(searchTerm.toLocaleLowerCase()) !== -1
    );
  }
}
```

5. Finally, register this filter in a corresponding module. In this case i registered it in app.module.ts e.g

app.module.ts

```ts
import { EmployeeFilterPipe } from './employees/employee-filter.pipe'; // it is imported here

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFilterPipe // it is registered here
  ],
})
```

**IMPORTANT:** We Have two types of pipes

- pure pipe
- impure pipe
  We set the type of pipe by adding through or false to our pipe attribute e.g
  By default, pipe is set to true meaning we have a pure pipe by default

```ts
@Pipe({
  name: 'employeeFilter',
  pipe: true
  // pipe: false // This results in an impure pipe
})
```

- A pure pipe is a pipe that is executed only when a pure change to the input value is detected.
  - A pure change is either a change to a primitive input value(string, number, boolean) or a changed object reference(Array, Data, object).

* An impure pipe runs on every change even when the source data does not change. this makes it incovenient to be used in our programs as it consumes a lot of resources.

**IMPORTANT** The recommended approach is to move the filtering and sorting into our componbent itself so you have better control on what that code should and should not execute.

## WHen the logic is moved to the component.ts file, we have our code as below

The steps are:

1.  Define a attribute to hold the filtered items: here it is **filteredEmployees: Employee[]**
2.  Define an attribute to hold the searched term. here it is private \_searchTerm: string. Then add this attribute name to the input element that holds the search text on the html form i.e

```html
<!--Notice the data binding to the searchTerm attribute  [(ngModel)]="searchTerm"-->
<div class="form-group">
  <input
    type="text"
    class="form-control"
    placeholder="Search By name"
    style="width: 300px"
    [(ngModel)]="searchTerm"
  />
</div>
```

3.  Define a setter and getter for the searched term. note i only removed the underscore from the name for the setter and getter to have **get serachTerm(){}** and **set serachTerm(){}**
4.  Define a function to handle the logic: here i called it **filterEmployees(){}**

component.ts

```ts
  employees: Employee[];
  filteredEmployees: Employee[]; //We use this to  store filtered items
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
```

5. Assign the initial state of the filteredEmployees attribute to hold the list of all employyes onInit() e.g

```ts
 ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees = this.employees;
    // this.employeeToDisplay = this.employees[0];
  };
```

6. then in the component.html, loop through the filteredEmployees attribute instead of the employees attribute
   i.e

component.html

```html
<!--notice the loop at  *ngFor="let employee of filteredEmployees". It is filteredEmployees that is used here -->
<div
  *ngFor="let employee of filteredEmployees"
  class="pointerCursor"
  (mousemove)="onMouseMove()"
></div>
```

## Query parameters on a route

1. Query parameters appear on a route after the question mark(?). e.g
   **http://localhost:4200/employees/3?name=me&id=4**
   They are usually used when you want the parameters on the route to be optional and when you want to retain those parameters across multiple routes.
2. Just like optional route parameters, query parameters are not part of the route configuration and therefore are not used in route pattern matching.
   **USAGE IN COMPONENT.TS FILE**
   To pass query parameter to a route in component.ts, we pass a second parameter to the route which is an object of key and value pairs and also another object with a key of queryParams E.g

component.ts

```ts
 onClick(employeeId: number) {
    this._router.navigate(['/employee', employeeId], {
      queryParams: {
        'searchTerm': this.searchTerm,
        'testParam': 'testValue'
      }
    });
  }
```

To preserve the query parameters through component.ts file, we add queryParamsHandling on the route navigate method of the function that our link calls to navigate to another page e.g

```ts
 viewNextEmployee() {
    this._router.navigate(['/employee', this._id], {
       queryParamsHandling:"preserve"
    });
  }

```

**USAGE IN COMPONENT.HTML FILE**
We pass a binding to the queryParams attribute and pass it our object as shown below:

```html
<a
  [routerLink]="['/employees']"
  [queryParams]="{'searchTerm': 'john, 'testParam': 'testValue'}"
  >List</a
>
```

To preserve the query parameters, we add querParamsHandling propert to the button to be clicked to move to another page e.g

```html
<a [routerLink]="['/list']" queryParamsHandling="preserve">Back</a>
```

**NOTE:** The value for queryParamsHandling could either be **preserve** OR **merge**

1. merge adds the query parameters of the current page i.e if the current page has route parameters, to the query parameters of the the page we will navigate to. E.g

component A.html: And let's say the route to component A is **list**

```html
<a
  [routerLink]="['/employees']"
  [queryParams]="{'searchTerm': 'john, 'testParam': 'testValue'}"
  >List</a
>
```

component B.html: Let's say the route to component B is **employees**

```html
<a
  [routerLink]="['/list']"
  [queryParams]="{'newParams': 'mergedParams'}"
  queryParamsHandling="merge"
  >Back</a
>
```

From the above two components, if i clicked on component A link tag, i will be directed to component B with the query parameters of component A appearing after the route name of component A i.e we will have a route as follows
**http://localhost:4200/employees?searchTerm=john&testParam=testValue**.

Now, since i have a queryParamsHandling="merge", it means when i click on the link on component B to return to component A, the query parameters of component B will be merged to the query parameters of compoent A i.e
**http://localhost:4200/list?searchTerm=john&testParam=testValue&newParams=mergedParams**.

**NOTE**: In Angular 2, we use preserveQueryParams instead.

## How to read query string parameters

In angular, we have three types of parameters, they are

1. Optional parameters
2. Required parameters
3. Query parameters
   The following methods are helpful when reading these parameters

- has(name): it returns **true** if the parameter is found else it returns **false**. it is handy to check for optional or query parameters
- get(name): it returns the **value** if the parameter is found. it returns **null** if it is not found.
- getAll(name): it returns a string array of the parameter value if found. But if not found, it returns an empty array.

* keys: It returns a string array of all the parameters.

We read these parameters by importing and using **ActivatedRoute** in out ts file.

Example to check for queryParams which handles query parameters and paraMap which handles optional and required parameters

```ts
import { ActivatedRoute } from '@angular/router';
constructor(private _route: ActivatedRoute) {}

 /*
  ======================================================
  Queryparameters uses queryParamMap api e.g
  ======================================================
 */

 console.log(this._route.snapshot.queryParamMap.has('searchTerm')); // shows true if searchTerm exists as a parameter on the route e.g true
 console.log(this._route.snapshot.queryParamMap.get('searchTerm')); // returns the value of searchTerm if searchTerm exists e.g 'John'
 console.log(this._route.snapshot.queryParamMap.getAll('searchTerm')); // Returns an array of the contents of searchTerm e.g Array["john"]
 console.log(this._route.snapshot.queryParamMap.keys);//returns an array of all the keys of the queryparameters e.g Array["searchTerm", "test"]


 /*
  ======================================================
  Optional or Required parameters uses paraMap api e.g
  ======================================================
 */

 console.log(this._route.snapshot.paramMap.has('searchTerm')); // shows true if searchTerm exists as a parameter on the route e.g true
 console.log(this._route.snapshot.paramMap.get('searchTerm')); // returns the value of searchTerm if searchTerm exists e.g 'John'
 console.log(this._route.snapshot.paramMap.getAll('searchTerm')); // Returns an array of the contents of searchTerm e.g Array["john"]
 console.log(this._route.snapshot.paramMap.keys);//Retruns an array of all the keys of required or query parameters e.g Array["id"]
```

Note, required parameters and optional parameters appear after a **semicolon(;)** and queryparameters appear after a **question mark(?)**.
e.g Given a route,

```ts
const appRoutes: Routes = [
  { path: "list/:id", component: ListEmployeesComponent },
];
```

And the link http://localhost:4200/list;id=1;name=mariam?level=10
From the link above, id is my required parameter as it is explicity defined in the route configuration and is necessary while defining a route, while name is an optional parameter and level is a query parameter

**NOTE:** We can also use the queryParams method as shown below:

```ts
 employees: Employee[];
 filteredEmployees: Employee[];

this._route.queryParaMap.subscribe((queryParams) => {
  if (queryParams.has('searchTerm')) {
    this.searchTerm = queryParams.get('searchTerm');
  } else {
    this.filteredEmployees = this.employees;
  }
})
```

## OBSERVABLES

The angular http service returns an observable.
In your component.service.ts file, import

```ts
import { Observable } from "rxjs";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
```

And we return our employee as an observable as shown below

```ts
getEmployees(): Observable<Employee[]> {
  return of(this.listEmployees);
}
```

From the above, the reurn type is an observable of employee array given as **Observable<Employee[]>**
And the return inside the function has an **of** preceeding it i.e **return of(this.listEmployees)**

And finally, in the component.ts file, we subscribe to this function as shown below:
component.ts

```ts
this._employeeService
  .getEmployees()
  .subscribe((empList) => (this.employees = empList));
```

**NOTE** To use multiple operators together, we chain them using a pipe method e.g

```ts
getEmployees(): Observable<Employee[]> {
    return of(this.listEmployees).pipe(
      delay( 3000 );
    );
}
```

## Route Resolver

To prefetch data and avoid showing empty component to users during asynchronous data fetch, we use route resolver either as a function or a service.
**Route resolver** as a service
STEPS:

1. Create a service.ts file for the resolver that implements resolve e.g

employee-list-resolver.service.ts

```ts
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.models";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[]> {
  constructor(private _employeeService: EmployeeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee[]> {
    return this._employeeService.getEmployees();
  }
}
```

2. Register the route resolver service e.g

app.module.ts

```ts
import { EmployeeListResolverService } from "./employees/employee-list-resolver.service";
providers: [EmployeeListResolverService];
```

3. Add the route resolver service to the route for which we want to prefetch data e.g
   You should pass it as an object of key and value pairs. In my examplee, i chose the key employeeList.

```ts
const appRoutes: Routes = [
  {
    path: "list",
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService },
  },
];
```

4. Read the prefetched data from the activated route e.g

```ts
constructor(private _route: ActivatedRoute) {
  this.employees = this._route.snapshot.data['employeeList'];
   if( this._route.snapshot.queryParamMap.get('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      } else {
      this.filteredEmployees = this.employees;
    }
}
```

**NOTE**: I read the data stored in the prefetched object key 'employeeList'. The employeeList is the key i used to store prefetched data as shown from step 3 above under the resolve object. I stored this content into the attribute employees which is the attribute that displays our data on our html page.

## Angular router navigation events

To see the lists of events that are executed during routing we pass a second parameter **{enableTracing: true }** to the **RouterModule.forRoot()** method in our module e.g

```ts
RouterModule.forRoot(appRoutes, { enableTracing: true });
```

## How to Display a Loading indicator if there is a delay navigating from onr route to another

Open your app.component.ts and add the following:

1. Create a boolean property and initialize it to true
2. import Router, Event and the necessary router navigation events as shown below
3. Toggle the state of the boolean depending on the router navigation
4. add your router code on the html page and conditionally show it depending on the boolean in the template file

```ts
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';

 showLoadingIndicator = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

       if(routerEvent instanceof NavigationEnd ||
        routerEvent instanceof  NavigationCancel ||
        routerEvent instanceof  NavigationError ) {
        this.showLoadingIndicator = false;
      }
    });
  }
```

Then in your app.component.html, just before your <router-outlet></router-outlet> tag add the code. Note that you can add a spinner in this section instead of just a plain html

```html
<div class="lds-roller" *ngIf="showLoadingIndicator">
  <div></div>
  <div></div>
  <div></div>
</div>
```

## Implementing CanActivate Guard

An example is shown below:
The explanaton is as follows

1. The parameter passed to the route is gotten by the route method inside the canActivae method i.e
   **this.\_employeeService.getEmployeeById(+route.paramMap.get('id'))**.
2. Also you need to add a + sign to the parameter gotten from the url in this case as the returned parameter is always in string format and we need convert it to a number with the help of the plus symbol(+).
3. This line **this.\_employeeService.getEmployeeById(+route.paramMap.get('id'))** returns an object of the employee with the passed in id. So to convert it to boolean i.e true if it exists and false if it doesn't exists, we use two exclamation marks **!!**.

```ts
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const employeeExists = !!this._employeeService.getEmployeeById(
      +route.paramMap.get("id")
    );

    if (employeeExists) {
      return true;
    } else {
      this._router.navigate(["notfound"]);
      return false;
    }
  }
}
```

## Passing data between components

1. Passing data from parent component to child component, we use **Input properties**
2. Passing data from child component to parent component, we use either

- Output Properties
- Template Reference Variables

3. Passing data from component to component (No parent child relation), we use

- Angular Service

* Required Route Parameters
* Optional Route Parameters
* Query Parameters

## Editing and updating data

To use the same form for creating and updating form fields, we create the route as shown here E.g
component.ts

```ts
 {
    'path': 'edit/:id', //note the id passed here. it will be set to 0 for default route. i.e create page
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
```

Then in component.html, we set the id to 0 which will display the form by default when the link is clicked e.g

```html
<li>
  <a routerLink="edit/0">Create</a>
</li>
```

Then on clicking on edit button, we can pass the id of the item to the edit route and it now means we will be modifying an item with the given id. Since an item does not have an id as 0, we chose 0 as the default page for creating a new item. Here is the method that routes us to the edit page with a particular id

```ts
 editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }
```

## Making a production build

```bash
 ng build --prod
```

You can install lite server with:

```ts
npm i -g lite-server
```

Running your production app with lite-server
Change directory to dist and then the name of your project e.g cd dist/projectName
Then press Enter. Type **lite-server** and press Enter, it will launch your app.

## Changing classes dynamically

The simplest form is <div [class.active]="counter ? 4 'active' : 'nonActive'"></div>
Advanced code form in template is

<div [ngClass]="changeClass()"></div>
Example of controlling it in typescipt file

```
counter: number = 0;

changeClass() {
  let myClass = {
    active: this.counter > 4,
    nonActive: this.counter <= 4
  }
}
```

Then in your scss file, you define the styles for active and nonActive.

We can also use this method of template reference variable below:

<div [class.active]="counter ? 4">
  <ng-template [ngIf]="counter ? 4" [ngIfElse]="none">
    counter greater than four
  </ng-template>

<ng-template #none>
counter less than four
</ng-template>

</div>

## Changing styles dynamically

The simplest form is

<div [style.background-color]="counter ? 4 'yellow' : 'light-gray'"></div>
Advanced in template is
<div [ngStyle]="{
  'background-color': counter ? 4 'yellow' : 'light-gray',
  'border': counter ? 4 '1px solid red' : '1px solid gray'
  }"></div>

## findindex method

```ts
const foundIndex = this.listEmployees.findIndex((e) => e.id === employee.id);
this.listEmployees[foundIndex] = employee;
```

## using reduce method to get the max id in an array

```ts
 save(employee: Employee) {
      if(employee.id === null) {
        //using reduce to get max id
      const maxid =  this.listEmployees.reduce(function(e1, e2) {
            return (e1.id > e2.id) ? e1 : e2;
    }).id;
  }
```

## using splice method to delete an item from an array

e.g

```ts
   delete(id: number) {
      const i = this.listEmployees.findIndex(e => e.id == id);
      if(i !== -1) {
        this.listEmployees.splice(i, 1); // splice
      }
    }
  // in splice the first parameter is the index of the element we ant to remove and the
  // second parameter is the number of items to remove starting from the index of the first parameter
```

## Creating accordion that is not reusable

In the component.ts file, create a boolean as shown below

```ts
isHidden = false;
```

Then in your component.html file, add the above property to the divs that are to be toggled and control the toggle with a click event as shown below

```html
<!--The click event is attached to the div with pointerCursor-->
<div class="panel panel-primary">
  <div class="pointerCursor" (click)="isHidden = !isHidden">
    <h3 class="panel-title">{{ employee.name | uppercase }}</h3>
  </div>

  <div class="panel-body" *ngIf="isHidden">
    <p>I am body</p>
  </div>

  <div class="panel-footer" *ngIf="isHidden">
    <p>I am footer</p>
  </div>
</div>

<!--OR using hidden property -->
<div class="panel panel-primary">
  <div class="pointerCursor" (click)="isHidden = !isHidden">
    <h3 class="panel-title">{{ employee.name | uppercase }}</h3>
  </div>

  <div class="panel-body" [hidden]="isHidden">
    <p>I am body</p>
  </div>

  <div class="panel-footer" [hidden]="isHidden">
    <p>I am footer</p>
  </div>
</div>
```

**NOTE**: ngIf removes a content completely from the DOM when the condition is false and re-adds the content to the DOM when the condition is true; So it is preferable to use the hidden property of angular to show and hide a content instead of using ngIf, that is if we are likely to show or hide that content several times in our code.

## using Angular Content projection to create a reusable accordion

<ng-content></ng-content> can be seen as a placeholder for a component's variable.
We can use it to inject content into a component as is done in a reusable accordion.
So if you have two places you need to insert data then you need two <ng-content><ng-content> tags.
Like adding content in a card-body and a card-footer.
**STEPS**
To create a reusable component, we can create the component in a shared folder since it will be shared among other components, so we generate it as follows:

- generate the component

```bash
$ ng g c shared/accordion --flat
// Here accordion is the name of the component to be generated
```

When we have more than one ng-content, we talk of multi-slot component projection.
When it is a single ng-content, we have a single-slot content projection.

- Add variables that are to be passed to this accordion in the accordion.ts file
  e.g

```ts
import { Component, Input, OnInit } from '@angular/core';
 @Input() hasJustViewed: boolean;
  @Input() title: string;
  isHidden: false;
```

- create the accordion html template
  e.g

```html
<div class="panel panel-primary" [class.panel-success]="hasJustViewed">
  <div class="panel-heading pointerCursor" (click)="isHidden = !isHidden">
    <h3 class="panel-title">{{ title | uppercase }}</h3>
  </div>

  <div class="panel-body" [hidden]="isHidden">
    <ng-content select=".myPanelBody"></ng-content>
  </div>

  <div class="panel-footer" [hidden]="isHidden">
    <ng-content select=".myPanelFooter"></ng-content>
  </div>
</div>
```

Notice the **select=".myPanelFooter"** and the **select=".myPanelBody"** on the ng-content tags. these are classes that will be used on the divs in the calling component to indicate which div represents the footer and which div represents the body.

- Finally call the accordion component in the component.html file that will use it by using its template reference template
  E.g In display-employee.component.html

```html
<app-accordion
  [title]="employee.name"
  [hasJustViewed]="selectedEmployeeId === employee.id"
>
  <div class="col-xs-10 myPanelBody">
    <div class="row vertical-align">
      <div class="col-xs-4">
        <img [src]="employee.photoPath" alt="" class="imageClass" />
      </div>
      <div class="col-xs-8">
        <div class="row">
          <div class="col-xs-6">Gender</div>
          <div class="col-xs-6">: {{ employee.gender }}</div>

          <div class="col-xs-6">Email</div>
          <div class="col-xs-6">: {{ employee.email }}</div>

          <div class="col-xs-6">Phone Number</div>
          <div class="col-xs-6">: {{ employee.phoneNumber }}</div>

          <div class="col-xs-6">Date Of Birth</div>
          <div class="col-xs-6">: {{ employee.dateOfBirth | date }}</div>

          <div class="col-xs-6">Department</div>
          <div class="col-xs-6" [ngSwitch]="employee.department">
            :
            <span *ngSwitchCase="1">Help Desk</span>
            <span *ngSwitchCase="2">HR</span>
            <span *ngSwitchCase="3">IT</span>
            <span *ngSwitchCase="4">PayRoll</span>
            <span *ngSwitchDefault>N/A</span>
          </div>

          <div class="col-xs-6">Is Active</div>
          <div class="col-xs-6">: {{ employee.isActive }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="myPanelFooter">
    <button class="btn btn-primary" (click)="viewEmployee()">View</button>
    <button class="btn btn-primary" (click)="editEmployee()">Edit</button>
    <span *ngIf="confirmDelete">
      <span>Are you sure you want to delete?</span>
      <button class="btn btn-danger" (click)="deleteEmployee()">Yes</button>
      <button class="btn btn-primary" (click)="confirmDelete = false">
        No
      </button>
    </span>
    <button
      *ngIf="!confirmDelete"
      class="btn btn-danger"
      (click)="confirmDelete = true"
    >
      Delete
    </button>
  </div>
</app-accordion>
```

Here, <app-accordion></app-accordion> is added to the component and the two sibling divs are filled with contents inbetween the app-accordion tags. Each div is given a class that corresponds to the name in the select property in the accordion.component.html. And binding is done to match the attributes specified in the accordion.component.ts file.

## Creating fake REST API

REST -> representational state transfer: It is an architectural pattern for creating an api that uses http as its communication method. It uses constraints such as

- Clent server constraints
- Stateless constraints
- cacheable constraints
- Uniform interface constraints: defines the interface between the client and the server

Resources examples

```ts
Resource        Verb      Outcome

/Employees      GET       Gets a list of employees
/Employees/1    GET       gets employee with id = 1
/Employees      POST      Creates a new employee
/Employees/1    PUT       Updates emploee with id = 1
/Employees/1    DELETE    Deletes employee with id = 1
```

https://github.com/typicode/json-server
To install the json server indicated by the link above, type

```bash
$ npm install -g json-server
```

To start the server, use

```bash
$ json-server --watch db.json
```

NOTE, To add data to this json server, all the json added data, i.e keys and value pairs must be in double quotes except boolean values, id, amount, price and phone number values e.g
"id": 1,
"name": "uju"

## Testing fake rest API

Use Fiddler

## Using HttpClient for request

- Import HttpClientModule into app.module.ts and add it in the import array as shown below

```ts
import {HttpClientModule} from '@angular/common/http';

imports: [
    HttpClientModule
  ],
```

- Import HttpClient in the service file where the request is made E.g
  employee.service.ts
  Also inject the imported HttpClient in the constructor of the service file.

```ts
import { HttpClient } from "@angular/common/http";

constructor(private httpClient: HttpClient) {

}
```

- Use the injected httpClient to make your requests e.g
  A get request is shown below:

```ts
getEmployees(): Observable<Employee[]> {
  return this.httpClient.get<Employee[]>("http://localhost:3000/employees");
}
```

Note that a httpClient request returns an object, so to have an array, you typecast it as shown in
**this.httpClient.get<Employee[]>**. Here it is typecasted as an employee array.
Note that you need to subscribe to a data gotten by httpClient if you want to use it. the only time you don't explicitly subscribe to use it is when you call the method consuming the httpClient inside a reolver service.

## handling Http Errors

Error during request should be handled in a service and not in a component.
**VERY IMPORTANT**: While handling error in angular, we have either a server side error response or a client ErrorEvent error.

- ErrorEvent: This is either a network error or a client side error.
  Write your logic as shown below in your service.ts file.

  - Import catchError and throwError as shown below.
  - write the method that handles the error as shown in handleError() method below.
  - Chain your error code to the method fetching or posting your data using pipe and catchError as show in
    getEmployees() method below.

```ts
  import {throwError} from 'rxjs';
  import { catchError } from 'rxjs/operators';

  getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>('http://localhost:3000/employees')
                              .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
      if(errorResponse.error instanceof ErrorEvent) {
        //Meaning it is a client side error or a network error
        console.error('Client side error', errorResponse.error.message);
      } else {
        //Meaning it is a server side error
        console.error('Server side error', errorResponse);
      }

      return throwError("There is a problem with the service. We are notified and working on it. Please try again later!")
  }
```

For more info, visit:
[stackoverflow](https://stackoverflow.com/questions/58297464/how-to-solve-catch-error-in-observable-in-angular-8)
Also checkout pipeable operators in angular if you want to know the type of operators that can be joined be pipe method to a method. catchError, map are examples of pipeable operators.
Piping multiple methods can be achieved as follows:

```ts
return this.httpClient
  .get<Employee[]>("http://localhost:3000/employees")
  .pipe(catchError(this.handleError), map());
```

from the above, i piped catcherror and map methods.
**Note** the below order for provision of services when resolver is used
Component <-> route <-> resolver service <-> angular service <-> server side service.

**Note** the below order for provision of services with No resolver
Component <-> angular service <-> server side service

## handling resolver error messages when resolver is used in our app

STEPS

- Create a model e.g resolved.model.ts file

```ts
import { Employee } from "../models/employee.models";

export class ResolvedEmployeeList {
  constructor(public employeeList: Employee[], public error: any = null) {}
}
```

- Rewrite your resolved.service.ts file to use the resolved model created above

```ts
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Employee } from "../models/employee.models";
import { EmployeeService } from "./employee.service";
import { ResolvedEmployeeList } from "./resolved-employee-list.model";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class EmployeeListResolverService
  implements Resolve<ResolvedEmployeeList> {
  constructor(private _employeeService: EmployeeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResolvedEmployeeList> {
    return this._employeeService.getEmployees().pipe(
      map((employeeList) => new ResolvedEmployeeList(employeeList)),
      catchError((err: any) => {
        return of(new ResolvedEmployeeList(null, err));
      })
    );
  }
}
```

- Write the logic of consumption in the component that uses this resolver. e.g
  in list-employee.component.ts file

```ts
employees: Employee[];
error: string;

constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
  const resolvedEmployeeList: ResolvedEmployeeList = this.employees = this._route.snapshot.data['employeeList']; // This displays prefetched data using route resolver
     if(resolvedEmployeeList.error === null) {
       this.employees = resolvedEmployeeList.employeeList;
     } else {
       this.error = resolvedEmployeeList.error;
     }
}
```

- bind to the error attribute in your component.html file e.g
  list-employee.component.html

```html
<div *ngIf="error">{{ error }}</div>
```

## Post request in angular

To make a post request, we need three information

- The Url to be posted to as the first parameter
- he data to be posted as the second parameter
- The headers that contains the content-type
  Example of a post request is given below:

```ts
this.httpClient
  .post<Employee>("http://localhost:3000/employees", employee, {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  })
  .pipe(catchError(this.handleError));
```

## Making a PUT request

In this case, we don't return anything so we have the return type as observable<void>
e.g

```ts
  baseUrl = 'http://localhost:3000/employees';
  updateEmployee(employee: Employee): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }).pipe(catchError(this.handleError))
    }

```

Also note the right usage of **return of(employee)** or **return of(false)**
Below is the save logic that chooses between updating or adding data to our database

```ts
saveEmployee(): void {
    // Check if you are updating or making a post request depending on the incoming id
    if (this.employee.id === null) {
      // Create new data
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    } else {
       // Update data
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    }
```

## Routing in different files

Routing made in different files is better because of

- Maintainability
- separation of concerns

To generate a route, we can use the command

```bash
ng g m app-routing --flat=true --module=app
// create app-routing module and attach it to the module app
```

**NOTE**: The error router-outlet is not a known module is
caused when RouterModule has not been imported in app.module.ts as it is the RouterModule that imports router-outlet.

## Reactive forms(Model Driven forms)

Classes for creating a form control tree in reactive forms:

- FormGroup
- FormControl

STEPS

- Import ReactiveFormsModule inside app.module.ts i.e

```ts
import { ReactiveFormsModule } from "@angular/forms";
```

- Add ReactiveFormsModule inside the imports section of app.module.ts

```ts
   imports: [
    ReactiveFormsModule
  ],
```

- Open the component.ts file that anages the template where the file is to be created and import FormGroup and FormControl e.g
  create-employee.component.ts

```ts
import { FormGroup, FormControl } from "@angular/forms";
```

- initialize a variable in the component.ts file to hold an instance of FormGroup i.e

```ts
 employeeForm!: FormGroup;
```

- in ngOnInit function, create the contents of the form i.e

```ts
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    })
  }
```

- In the component.html file, create the html fields and link the form to the variable holding the FormGroup

```html
<form
  class="form-horizontal"
  [formGroup]="employeeForm"
  (ngSubmit)="onSubmit()"
>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Create Employee</h3>
    </div>

    <div class="panel-body">
      <div class="form-group">
        <label for="fullname" class="control-label">Full Name</label>
        <input
          type="text"
          id="fullname"
          formControlName="fullname"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="email" class="control-label">Email</label>
        <input
          type="text"
          id="email"
          formControlName="email"
          class="form-control"
        />
      </div>
    </div>
    <div class="panel-footer">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </div>
</form>
```

**IMPORTANT**

- The form is linked to the variable in the component.ts file as shown below

```html
<form
  class="form-horizontal"
  [formGroup]="employeeForm"
  (ngSubmit)="onSubmit()"
></form>
<!--Note the usage here  [formGroup]="employeeForm". We linked the form to the instance in component.ts-->
```

- use formControlName to link each tag to its corresponding attribute in the controller i.e

```html
<div class="form-group">
      <label for="email" class="control-label">Email</label>
      <input
        type="text"
        id="email"
        formControlName="email"
        class="form-control"
      />
</div>
 <!--Note the usage here formControlName="email" which corresponds to the email attribute in the component.ts file ->
```

**NOTES**

- In a reactive form, we create instances of Formcontrol and Formgroup classes
- Both FormControl and FormGroup classes nherit from AbstractControl base class
- The Abstractcontrol class has properties that help us track both FormControl and FormGroup value and state.

* FormControl tracks the value and state of an individaul html element.
* FormGroup instance tracks the value and state of all the form controls in that group.
  AbstractControl Properties: value, errors, valid, invalid, dirty, pristine, touched, untouched
  AbstractControl Methods: setValidators(), clearValidators(), updateValueAndValidity(),
  setValue(), patchValue(), reset()

We can check the state of a form by using name of the form point the validation e.g
employeeForm.touched, employeeForm.valid e.t.c

## Accessing an individual html element

We can access a formControl in a group by

```ts
employeeForm.controls.fullName.value;
```

OR

```ts
employeeForm.get("fullName").value;
```

## Nested formGroups

In the example below, skills is created as a nested Formgroup

```ts
ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullname: new FormControl(),
      email: new FormControl(),

      //Skills as a nested formgroup
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    })
  }
```

And in the component.html file, add the fields to correspond to the attributes in the component.ts file. Also make sure
you bind them using formGroupName to bind to the name of the group and formControlName to bind to each attribute

```html
<!--Adding skills FormGroup-->
<div formGroupName="skills">
  <input type="text" id="skillName" formControlName="skillName" />

  <input
    type="text"
    placeholder="experience in years"
    formControlName="experienceInYears"
  />

  <div class="form-group">
    <label>Proficiency</label>
    <input
      type="radio"
      value="beginner"
      formControlName="proficiency"
    />Beginner
    <input
      type="radio"
      value="intermediate"
      formControlName="proficiency"
    />intermediate
    <input
      type="radio"
      value="advanced"
      formControlName="proficiency"
    />Advanced
  </div>
</div>
```

## SetValue() and PatchValue()

We can populate html element fields using setValue() or patchValue() as shown below

```ts
 onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullname: "kingsley",
      email: "k@gmail.com",
      skills: {
        skillName: "C#",
        experienceInYears: 5,
        proficiency: 'beginner'
      }
    })
  }
```

We use setValue() when we want to update all the fields but we use patchValue() when we want to update some values
but not all or we still can use it to update all the values.
E.g

```ts
 onLoadDataClick(): void {
    this.employeeForm.patchValue({
      fullname: "kingsley",
      email: "k@gmail.com",
    })
  }
```

## FormBuilder class

Another way of creating a reactive form is using a formbuilder. It reduces the number of codes needed to build a reactive form. FormBuilder has 3 methods:

- control()
- array()
- group()

To build a form using formbuilder, follow the steps below:

- Import FormBuilder and FormGroup as shown below

```ts
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
```

- inject the formBuilder in your constructor as FormBuilder is a service

```ts
constructor(private fb: FormBuilder){}
```

- Create the fields needed for the form

```ts
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: [''],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['']
      })
    })
  }
```

- The first parameter in the FormBuilder is the value by default. From above we used ''.
- The second parameter is for synchronous validations
- The third parameter is for asynchronous validations.
  Therefore to set a default value, we can add the default value inbetween the quotes i.e i added a
  default email as shown below

```ts
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: [''],
      email: ['k@gmail.com'],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['']
      })
    })
  }
```

## Reactive Forms Validations

Steps

- Import the validators class

```ts
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
```

Validators have some inbuilt functions e.g

- required
- requiredTrue: mostly used on a required checkbox e.g agree terms and conditions checkbox

* email: checks that the field contains an email
* pattern: checks that the field matches a given pattern
* min
* max
* minLength: for a minimum number of characters
* maxLength: for a maxlength of character
  Example code:

```ts
this.employeeForm = this.fb.group({
  fullname: [
    "",
    [Validators.required, Validators.minLength(2), Validators.maxLength(9)],
  ],
  email: [""],
  skills: this.fb.group({
    skillName: [""],
    experienceInYears: [""],
    proficiency: [""],
  }),
});
```

below is the component.html code to manage the error

```html
<form
  class="form-horizontal"
  [formGroup]="employeeForm"
  (ngSubmit)="onSubmit()"
>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Create Employee</h3>
    </div>

    <div class="panel-body">
      <div
        class="form-group"
        [ngClass]="{
          'has-error':
            employeeForm.get('fullname').invalid &&
            employeeForm.get('fullname').touched
        }"
      >
        <label for="fullname" class="control-label">Full Name</label>
        <input
          type="text"
          id="fullname"
          formControlName="fullname"
          class="form-control"
        />
        <span
          class="help-block"
          *ngIf="
            employeeForm.get('fullname').errors &&
            (employeeForm.get('fullname').touched ||
              employeeForm.get('fullname').dirty)
          "
        >
          <span
            *ngIf="
              employeeForm.get('fullname').hasError('required') &&
              employeeForm.get('fullname').touched
            "
          >
            Full name is required
          </span>
          <span
            *ngIf="
              employeeForm.get('fullname').hasError('minlength') ||
              employeeForm.get('fullname').hasError('maxlength')
            "
          >
            Full name must be greater than 2 characters and less than 10
            characters
          </span>
        </span>
      </div>
    </div>
    <div class="panel-footer">
      <div class="btn-toolbar">
        <button type="submit" class="btn btn-primary">Save</button>
        <button
          type="button"
          class="btn btn-primary"
          (click)="onLoadDataClick()"
        >
          Load Data
        </button>
      </div>
    </div>
  </div>
</form>
```

Note the use of hasError('minlength), hasError('maxlength) and hasError('required') to check if the errors occured for these keys.
You can visit the link below for more explanation:
[stackoverflow](https://stackoverflow.com/questions/46129719/angular-4-form-validators-minlength-maxlength-does-not-work-on-field-type-nu)

## Monitor FormControl valuechanges

valueChanges property is an observable that is found in AbstractControl and since FormControl and FormGroup are instances of AbstractControl, they can inherit this valueChanges property of Abstractcontrol.
To react to this valueChanges property, we have to subscribe to it since it's an observable.
Example:

```ts
this.employeeForm.get("fullname")?.valueChanges.subscribe((value: string) => {
  console.log(value);
});

//Or for formGroup
this.employeeForm.valueChanges.subscribe((value: any) => {
  console.log(JSON.stringify(value));
});
```

## Looping through FormControls

This helps us to

- Reset formcontrols
- Enable or disable all formcontrols
- Set and clear validators
- Mark formcontrols as dirty, touched e.t.c
- Move validation to the component class

To retrieve all the keys of a form, we use Object.keys() method.
We use this looping mehod to go through all the controls of a form and apply changes to all of the them. like disabling all of the form controls on button click e.g

```ts
logKeyValuePairs(group: FormGroup): void {
    //console.log(Object.keys(group.controls));
  Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
        if(abstractControl instanceof FormGroup) {
          // Used to recursively call the function so it handles nested formgroup
          this.logKeyValuePairs(abstractControl);
        } else {
          console.log('key = ' + key + " Value = " + abstractControl?.value);
          abstractControl?.disable; // used to disable the controls after looping through them
        }
    })
  }

  onLoadDataClick(): void {
    this.logKeyValuePairs(this.employeeForm);
  }
```

## Move Validation meassages to the component class in a reactive form

### STEPS

- Define an object that holds all the errors to be shown on your form. Here i call the object validationMessages

```ts
validationMessages: any = {
  fullname: {
    required: "Full name is required.",
    minlength: "Full name must be greater than or equal to 2 characters.",
    maxlength: "Full name must be less than 10 characters",
  },
  email: {
    required: "Email is required.",
  },
  skillName: {
    required: "SkillName is required",
  },
  experienceInYears: {
    required: "experience is required",
  },
  proficiency: {
    required: "proficiency is required",
  },
};
```

- Define another object that will hold only the errors that actually occured. It is to this object that our form will be binded to. Here i call it formErrors

```ts
formErrors: any = {
  fullname: "",
  email: "",
  skillName: "",
  experienceInYears: "",
  proficiency: "",
};
```

- Loop throug the formcontrols and save the controls with errors in forerrors object

```ts
 logValidationErrors(group: FormGroup = this.employeeForm): void {
    //console.log(Object.keys(group.controls));
    Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
        if(abstractControl instanceof FormGroup) {
          // Used to recursively call the function so it handles nested formgroup
          this.logValidationErrors(abstractControl);
          //abstractControl?.disable;// if i call it here, it disables only the controls in the nested form
        } else {
          //console.log('key = ' + key + " Value = " + abstractControl?.value);
         // abstractControl?.disable; // when used  here it disables all the controls in the form
         this.formErrors[key] = ''; // clear existing errors
         if(abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
           const messages = this.validationMessages[key];
           //console.log(messages);
           //console.log(abstractControl.errors);
           for (const errorKey in abstractControl.errors) {
             if(errorKey) {
               this.formErrors[key] += messages[errorKey] + ' ';
             }
           }
         }
        }
    })
  }

 /*  onLoadDataClick(): void {
    this.logValidationErrors(this.employeeForm);
    console.log(this.formErrors);
  } */
```

## Move Validation Logic to the component class in a reactive form

### STEPS

- write valueChanges method inside the ngOnInit() method as shown below

```ts
 ngOnInit(): void {
    // Using FormBuilder approach
    this.employeeForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9)]],
      email: ['', Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      })
    });

  // This is where we call dynamically the validation logic
    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    })

  }
```

- Bind to formErrors object in the component.html file as shown below

```html
<form
  class="form-horizontal"
  [formGroup]="employeeForm"
  (ngSubmit)="onSubmit()"
>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Create Employee</h3>
    </div>

    <div class="panel-body">
      <div class="form-group" [ngClass]="{ 'has-error': formErrors.fullname }">
        <label for="fullname" class="control-label">Full Name</label>
        <input
          type="text"
          id="fullname"
          formControlName="fullname"
          class="form-control"
          (blur)="logValidationErrors()"
        />
        <label>{{ fullnameLength }}</label>
        <span class="help-block" *ngIf="formErrors.fullname">
          {{ formErrors.fullname }}
        </span>
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': formErrors.email }">
        <label for="email" class="control-label">Email</label>
        <input
          type="text"
          id="email"
          formControlName="email"
          class="form-control"
          (blur)="logValidationErrors()"
        />
        <span class="help-block" *ngIf="formErrors.email">
          {{ formErrors.email }}
        </span>
      </div>

      <!--Adding skills FormGroup-->
      <div class="well">
        <div
          formGroupName="skills"
          [ngClass]="{ 'has-error': formErrors.skillName }"
        >
          <input
            type="text"
            id="skillName"
            formControlName="skillName"
            (blur)="logValidationErrors()"
            placeholder="Name"
            style="margin-right: 10px"
          />
          <span class="help-block" *ngIf="formErrors.skillName">
            {{ formErrors.skillName }}
          </span>

          <input
            type="text"
            placeholder="Experience in years"
            formControlName="experienceInYears"
            (blur)="logValidationErrors()"
          />
          <span class="help-block" *ngIf="formErrors.experienceInYears">
            {{ formErrors.experienceInYears }}
          </span>

          <div
            class="form-group"
            [ngClass]="{ 'has-error': formErrors.proficiency }"
          >
            <label>Proficiency</label>
            <input
              type="radio"
              value="beginner"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />Beginner
            <input
              type="radio"
              value="intermediate"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />intermediate
            <input
              type="radio"
              value="advanced"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />Advanced
          </div>
          <span class="help-block" *ngIf="formErrors.proficiency">
            {{ formErrors.proficiency }}
          </span>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <div class="btn-toolbar">
        <button type="submit" class="btn btn-primary">Save</button>
        <button
          type="button"
          class="btn btn-primary"
          (click)="onLoadDataClick()"
        >
          Load Data
        </button>
      </div>
    </div>
  </div>
</form>
```

## Dynamically adding or removing validators in a reactive form

Here we use these methods of AbstractControl to achieve our aim

- setValidators()
- clearValidators()
- updateValueAndValidity()

```ts

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
  employeeForm!: FormGroup;

  validationMessages: any = {
    'fullname': {
      'required': 'Full name is required.',
      'minlength': 'Full name must be greater than or equal to 2 characters.',
      'maxlength': 'Full name must be less than 10 characters'
    },
    'email': {
      'required': 'Email is required.'
    },
    'phone': {
      'required': 'Phone is required.'
    },
    'skillName': {
      'required': 'SkillName is required'
    },
    'experienceInYears': {
      'required': 'experience is required'
    },
    'proficiency': {
      'required': 'proficiency is required'
    }
  };

  formErrors: any = {
    'fullname': '',
    'email': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Using FormBuilder approach
    this.employeeForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9)]],
      email: ['', Validators.required],
      contactPreference: ['email'],
      phone: [''],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      })
    });

    this.employeeForm.get("fullname")?.valueChanges.subscribe(
      (value: string) => {
        //console.log(value);
        this.fullnameLength = value.length;
      }
    );

    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    })

  }

onContactPreferenceChange(selectedValue: string) {
    const phoneControl = this.employeeForm.get('phone');
    if(selectedValue === 'phone') {
      phoneControl?.setValidators(Validators.required);
      //multiple validators can be set as shown below
      // phoneControl?.setValidators([Validators.required, Validators.maxLength(8)]);
    } else {
      phoneControl?.clearValidators();
    }

    phoneControl?.updateValueAndValidity(); // This triggers the form validation
  }
```

And the html code looks like

```html
<form
  class="form-horizontal"
  [formGroup]="employeeForm"
  (ngSubmit)="onSubmit()"
>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Create Employee</h3>
    </div>

    <div class="panel-body">
      <div class="form-group" [ngClass]="{ 'has-error': formErrors.fullname }">
        <label for="fullname" class="control-label">Full Name</label>
        <input
          type="text"
          id="fullname"
          formControlName="fullname"
          class="form-control"
          (blur)="logValidationErrors()"
        />
        <label>{{ fullnameLength }}</label>
        <span class="help-block" *ngIf="formErrors.fullname">
          {{ formErrors.fullname }}
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-md-2">Contact Preference</label>
        <div class="col-md-8" style="display: inline-block">
          <input
            type="radio"
            value="email"
            formControlName="contactPreference"
            (click)="onContactPreferenceChange('email')"
            style="margin-left: 8px; margin-right: 4px"
          />Email

          <input
            type="radio"
            value="phone"
            formControlName="contactPreference"
            (click)="onContactPreferenceChange('phone')"
            style="margin-left: 8px; margin-right: 4px"
          />Phone
        </div>
        <span class="help-block" *ngIf="formErrors.proficiency">
          {{ formErrors.proficiency }}
        </span>
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': formErrors.email }">
        <label for="email" class="control-label">Email</label>
        <input
          type="text"
          id="email"
          formControlName="email"
          class="form-control"
          (blur)="logValidationErrors()"
        />
        <span class="help-block" *ngIf="formErrors.email">
          {{ formErrors.email }}
        </span>
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': formErrors.phone }">
        <label for="phone" class="control-label">Phone</label>
        <input
          type="text"
          id="phone"
          formControlName="phone"
          class="form-control"
          (blur)="logValidationErrors()"
        />
        <span class="help-block" *ngIf="formErrors.phone">
          {{ formErrors.phone }}
        </span>
      </div>

      <!--Adding skills FormGroup-->
      <div class="well">
        <div
          formGroupName="skills"
          [ngClass]="{ 'has-error': formErrors.skillName }"
        >
          <input
            type="text"
            id="skillName"
            formControlName="skillName"
            (blur)="logValidationErrors()"
            placeholder="Name"
            style="margin-right: 10px"
          />
          <span class="help-block" *ngIf="formErrors.skillName">
            {{ formErrors.skillName }}
          </span>

          <input
            type="text"
            placeholder="Experience in years"
            formControlName="experienceInYears"
            (blur)="logValidationErrors()"
          />
          <span class="help-block" *ngIf="formErrors.experienceInYears">
            {{ formErrors.experienceInYears }}
          </span>

          <div
            class="form-group"
            [ngClass]="{ 'has-error': formErrors.proficiency }"
          >
            <label>Proficiency</label>
            <input
              type="radio"
              value="beginner"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />Beginner
            <input
              type="radio"
              value="intermediate"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />intermediate
            <input
              type="radio"
              value="advanced"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />Advanced
          </div>
          <span class="help-block" *ngIf="formErrors.proficiency">
            {{ formErrors.proficiency }}
          </span>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <div class="btn-toolbar">
        <button type="submit" class="btn btn-primary">Save</button>
        <button
          type="button"
          class="btn btn-primary"
          (click)="onLoadDataClick()"
        >
          Load Data
        </button>
      </div>
    </div>
  </div>
</form>
```

Instaed of using a click event on the form to call the onContactPreference Change method,
we can use valueChanges method to realise it as shown below: The changes are monitored with valueChanges method inside the ngOnInit() method.

```ts
ngOnInit(): void {
    // Using FormBuilder approach
    this.employeeForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9)]],
      email: ['', Validators.required],
      contactPreference: ['email'],
      phone: [''],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      })
    });

    this.employeeForm.get("fullname")?.valueChanges.subscribe(
      (value: string) => {
        //console.log(value);
        this.fullnameLength = value.length;
      }
    );

    // This monitors the changes to contactPreference fields of either email or phone
    this.employeeForm.get('contactPreference')?.valueChanges.subscribe((data: string) => {
      this.onContactPreferenceChange(data);
    });

    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    })

  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.controls.fullname.value);
    console.log(this.employeeForm.get('email')?.dirty);
    console.log(this.employeeForm.touched);
  }

  logValidationErrors(group: FormGroup = this.employeeForm): void {
    //console.log(Object.keys(group.controls));
    Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
        if(abstractControl instanceof FormGroup) {
          // Used to recursively call the function so it handles nested formgroup
          this.logValidationErrors(abstractControl);
          //abstractControl?.disable;// if i call it here, it disables only the controls in the nested form
        } else {
          //console.log('key = ' + key + " Value = " + abstractControl?.value);
         // abstractControl?.disable; // when used  here it disables all the controls in the form
         this.formErrors[key] = ''; // clear existing errors
         if(abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
           const messages = this.validationMessages[key];
           //console.log(messages);
           //console.log(abstractControl.errors);
           for (const errorKey in abstractControl.errors) {
             if(errorKey) {
               this.formErrors[key] += messages[errorKey] + ' ';
             }
           }
         }
        }
    })
  }

  onLoadDataClick(): void {
    this.logValidationErrors(this.employeeForm);
    console.log(this.formErrors);
  }

  onContactPreferenceChange(selectedValue: string) {
    const phoneControl = this.employeeForm.get('phone');
    if(selectedValue === 'phone') {
      phoneControl?.setValidators(Validators.required);
      //multiple validators can be set as shown below
      // phoneControl?.setValidators([Validators.required, Validators.maxLength(8)]);
    } else {
      phoneControl?.clearValidators();
    }

    phoneControl?.updateValueAndValidity(); // This triggers the form validation
  }
```

And we delete the click method from the html file. The form is shown below

```html
<form
  class="form-horizontal"
  [formGroup]="employeeForm"
  (ngSubmit)="onSubmit()"
>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Create Employee</h3>
    </div>

    <div class="panel-body">
      <div class="form-group" [ngClass]="{ 'has-error': formErrors.fullname }">
        <label for="fullname" class="control-label">Full Name</label>
        <input
          type="text"
          id="fullname"
          formControlName="fullname"
          class="form-control"
          (blur)="logValidationErrors()"
        />
        <label>{{ fullnameLength }}</label>
        <span class="help-block" *ngIf="formErrors.fullname">
          {{ formErrors.fullname }}
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-md-2">Contact Preference</label>
        <div class="col-md-8" style="display: inline-block">
          <input
            type="radio"
            value="email"
            formControlName="contactPreference"
            style="margin-left: 8px; margin-right: 4px"
          />Email

          <input
            type="radio"
            value="phone"
            formControlName="contactPreference"
            style="margin-left: 8px; margin-right: 4px"
          />Phone
        </div>
        <span class="help-block" *ngIf="formErrors.proficiency">
          {{ formErrors.proficiency }}
        </span>
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': formErrors.email }">
        <label for="email" class="control-label">Email</label>
        <input
          type="text"
          id="email"
          formControlName="email"
          class="form-control"
          (blur)="logValidationErrors()"
        />
        <span class="help-block" *ngIf="formErrors.email">
          {{ formErrors.email }}
        </span>
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': formErrors.phone }">
        <label for="phone" class="control-label">Phone</label>
        <input
          type="text"
          id="phone"
          formControlName="phone"
          class="form-control"
          (blur)="logValidationErrors()"
        />
        <span class="help-block" *ngIf="formErrors.phone">
          {{ formErrors.phone }}
        </span>
      </div>

      <!--Adding skills FormGroup-->
      <div class="well">
        <div
          formGroupName="skills"
          [ngClass]="{ 'has-error': formErrors.skillName }"
        >
          <input
            type="text"
            id="skillName"
            formControlName="skillName"
            (blur)="logValidationErrors()"
            placeholder="Name"
            style="margin-right: 10px"
          />
          <span class="help-block" *ngIf="formErrors.skillName">
            {{ formErrors.skillName }}
          </span>

          <input
            type="text"
            placeholder="Experience in years"
            formControlName="experienceInYears"
            (blur)="logValidationErrors()"
          />
          <span class="help-block" *ngIf="formErrors.experienceInYears">
            {{ formErrors.experienceInYears }}
          </span>

          <div
            class="form-group"
            [ngClass]="{ 'has-error': formErrors.proficiency }"
          >
            <label>Proficiency</label>
            <input
              type="radio"
              value="beginner"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />Beginner
            <input
              type="radio"
              value="intermediate"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />intermediate
            <input
              type="radio"
              value="advanced"
              formControlName="proficiency"
              (blur)="logValidationErrors()"
              style="margin-left: 8px; margin-right: 4px"
            />Advanced
          </div>
          <span class="help-block" *ngIf="formErrors.proficiency">
            {{ formErrors.proficiency }}
          </span>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <div class="btn-toolbar">
        <button type="submit" class="btn btn-primary">Save</button>
        <button
          type="button"
          class="btn btn-primary"
          (click)="onLoadDataClick()"
        >
          Load Data
        </button>
      </div>
    </div>
  </div>
</form>
```

## Creating an using a Custom Validator in a Reactive Form

### STEPS

- Create the customer validation function
  This is created inside the component.ts file but it should be created outside the closing tag of the component so it is a separate function. E.g

  ```ts
  //The return type is null when there is no error but an object of key value pairs when there is error
  function emailDomain(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf("@") + 1);
    if (email === "" || domain.toLowerCase() === "king.com") {
      //return null here when there is no error
      return null;
    } else {
      //return an object here with key value pairs as shown below
      return { emailDomain: true };
    }
  }
  ```

* Attach the custom validator to the control you want to validate e.g

```ts
  email: ['', [Validators.required, emailDomain]],
  //Note that the function emailDomain is attached to email without using the this keyword as the
  // function is outside the class component
```

- Attach the key of the error to the validationMessages object for the correct control and add a message value that will be displayed to the key . Here we chose the key
  emailDomain in the emailDomain function, so we attach in validationMessages giving it the string value
  "Email domain should be king.com" as is shown below:

```ts
validationMessages: any = {
  email: {
    required: "Email is required.",
    emailDomain: "Email domain should be king.com",
  },
};
```

## Creating Custom Validator with Parameter

### STEPS

The difference here is we refactor the code above to use closure and make the function able to accept parameters.

- Create the customer validation function
  This is created inside the component.ts file but it should be created outside the closing tag of the component so it is a separate function. E.g

  ```ts
  //The return type is null when there is no error but an object of key value pairs when there is error
  function emailDomain(domainName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      const domain = email.substring(email.lastIndexOf("@") + 1);
      if (email === "" || domain.toLowerCase() === domainName.toLowerCase()) {
        return null;
      } else {
        return { emailDomain: true };
      }
    };
  }
  ```

````

* Attach the custom validator to the control you want to validate e.g

```ts
  //Pass the required attribute to the function when it is called E.g "king.com"
  email: ['', [Validators.required, emailDomain('king.com')]],
  //Note that the function emailDomain is attached to email without using the this keyword as the
  // function is outside the class component
````

- Attach the key of the error to the validationMessages object for the correct control and add a message value that will be displayed to the key . Here we chose the key
  emailDomain in the emailDomain function, so we attach in validationMessages giving it the string value
  "Email domain should be king.com" as is shown below:

```ts
validationMessages: any = {
  email: {
    required: "Email is required.",
    emailDomain: "Email domain should be king.com",
  },
};
```

## Making a custom validator function reusable

### STEPS

We will cut out the code from the component.ts file and refactor it in a separate file.

- Create a folder in your app called shared.
- Create a file in the shared folder e.g custom.validator.ts
- Add your validation code inside this file and make the function static with the static keyword e.g
  custom.validators.ts

```ts
import { AbstractControl } from "@angular/forms";
export class CustomValidators {
  static emailDomain(domainName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      const domain = email.substring(email.lastIndexOf("@") + 1);
      if (email === "" || domain.toLowerCase() === domainName.toLowerCase()) {
        return null;
      } else {
        return { emailDomain: true };
      }
    };
  }
}
```

- In the component.ts file where we want to use this custom validator, import the custom validator as shown below:

```ts
import { CustomValidators } from "./../shared/custom.validators";
```

- Then to use it, we can reference the CustomValidators we just imported and reference the function in it that we want to use as shown below:

```ts
email: ['', [Validators.required, CustomValidators.emailDomain('king.com')]],
```

Here we referenced CustomValidators and then emailDomain() function inside it.
