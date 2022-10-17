import { AbstractControl, FormGroup } from '@angular/forms';

export function checkEmail(c: AbstractControl) {
  const rexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  return rexEmail.test(c.value) ? null : { emailInvalid: true };
}
export function checkPass(control: AbstractControl) {
  const rexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
  let rs = rexPass.test(control.value);
  return rs ? null : { passIsInvalid: true };
}
export function comparePass(control: AbstractControl) {
  const v = control.value;
  return v.password === v.cfPass ? null : { passIsNotMatch: true };
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ MustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
