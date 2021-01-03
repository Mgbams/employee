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

<li>
  <a routerLink="create">Create</a>
</li>

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
