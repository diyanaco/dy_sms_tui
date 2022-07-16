import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserAuthService } from 'app/service/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(
    private formBuilder : FormBuilder,
    private userLoginSer : UserAuthService) {
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    let postLogin = {
      "email" : this.signupForm.get('email').value,
      "password": this.signupForm.get('password').value
    }
    this.userLoginSer.postUserSignup(postLogin).subscribe()
  }
}
