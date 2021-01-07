import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting:  ConfirmEqualValidatorDirective,
        multi: true
    }]
})

export class ConfirmEqualValidatorDirective implements Validator {
    
    validate(passwordGroup: AbstractControl): {[key:string]: any} | null {
        const passwordField = passwordGroup.get('password');
         const confirmPasswordField = passwordGroup.get('confirmPassword');
        if(passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
            return {'notEqual': true};
        }
        return null;
    }

    //Before using  ngModelGroup="passwordGroup" in html page
   // @Input() appConfirmEqualValidator: string;
  /*    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): {[key:string]: any} | null {
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if(controlToCompare && controlToCompare.value !== control.value) {
            return {'notEqual': true};
        }
        return null;
    } */
}