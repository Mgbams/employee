# AngularCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Resources

To see a list of available resources we can use in our projects, visit
[resources](https://angular.io/resources?category=development)

## Prerequisite

- Angular cli

```bash
npm install -g @angular/cli
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

Add botstrap to **angular.json** fileunder the styles section as shown below

```json
"node_modules/bootstrap/dist/css/bootstrap.min.css"
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

## Launch project with

```bash
ng serve -o
```

## Generating a component

```bash
// ng g c folderName/componentName --flat true //all starts in small letters and are in plural
$ ng g c employees/listEmployees --flat true
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
