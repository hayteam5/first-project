import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, } from "@angular/forms";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
 /* title = 'signUpTitle';*/

  userForm = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10), ]),
    email: new FormControl(null, [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm.value)
  }

}

