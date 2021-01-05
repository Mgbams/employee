import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[appSelectDirective]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})

export class SelectRequiredValidatorDirective implements Validators {
    //It returns null when the validation succeeds.
    //It returns an object of key and value if the validation fails
    //control represents the element that is being passed into this directive for validation
    // When using customer validator we don't need required attribute on our html element
    //import it to your app.module.ts
    // register it under declaration in app.module.ts
    @Input() appSelectDirective: string;
    //  @Input('appSelectDirective') defaultSelecet: string; //using alias
    validate(control: AbstractControl): {[key:string]: any} | null {
        return control.value === this.appSelectDirective ? {'defaultSelected': true} : null;

        //Using alias
        //  return control.value === this.defaultSelect ? {'defaultSelected': true} : null;
    }
}