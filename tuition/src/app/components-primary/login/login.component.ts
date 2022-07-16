import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserAuthService } from 'app/service/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
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
      "email" : this.loginForm.get('email').value,
      "password": this.loginForm.get('password').value
    }
    this.userLoginSer.postUserLogin(postLogin).subscribe()
  }
}
