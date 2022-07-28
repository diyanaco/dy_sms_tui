import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { UserAuthService } from 'app/_services/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = this.formBuilder.group({
    email: '',
    password: '',
    first_name :'',
    last_name : ''
  });

  constructor(
    private formBuilder : UntypedFormBuilder,
    private userLoginSer : UserAuthService) {
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    let postJson = {
      "email" : this.signupForm.get('email').value,
      "password": this.signupForm.get('password').value,
      "first_name" : this.signupForm.get('first_name').value,
      "last_name" : this.signupForm.get("last_name").value

    }
    this.userLoginSer.postUserSignup(postJson).subscribe(response => console.log(response))
  }
}
