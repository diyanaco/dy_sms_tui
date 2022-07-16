import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserAuthService } from 'app/_services/user-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/_services/authentication.service';
import {first} from 'rxjs/operators'
import { JwtHelperService } from '@auth0/angular-jwt';


const jwt = new JwtHelperService();
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
  returnUrl : string;
  private decodedToken
  constructor(
    private formBuilder : FormBuilder,
    private userLoginSer : UserAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userAuth : UserAuthService) {
  }

  ngOnInit(): void {
    // reset login status
    this.userAuth.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit(): void {
    let postLoginData = {
      "email" : this.loginForm.get('email').value,
      "password": this.loginForm.get('password').value
    }
    this.userLoginSer.postUserLogin(postLoginData)
      .pipe(first())
      .subscribe()
  }
}
