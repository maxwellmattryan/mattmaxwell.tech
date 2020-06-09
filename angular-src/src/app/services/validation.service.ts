import { Injectable } from '@angular/core';
import { FormArray, ValidatorFn } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    constructor() { }

    hasValidAdminCredentials(admin) {
        return (
            admin.username != undefined && 
            admin.password != undefined
        );
    }

    hasMinTopics(min = 1) {
        const validator: ValidatorFn = (formArray: FormArray) => {
            const amountSelected = formArray.controls
                .map(control => control.value)
                .reduce((prev, next) => next ? prev + next : prev, 0);
            
            return amountSelected >= min ? null : { required: true };
        };

        return validator;
    }
}
