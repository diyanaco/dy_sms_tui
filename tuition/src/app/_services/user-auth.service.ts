import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number;
  username : string;
}

@Injectable({
  providedIn: 'root'
}
)
export class UserAuthService {
  private decodedToken
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.decodedToken = JSON.parse(localStorage.getItem('auth_meta')) || new DecodedToken();
  }
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  postUserLogin(data) {
    return this.http
      .post<UserModel>(`${environment.DIYANA_API}/user/login`, data, { headers: this.headers })
      .pipe(
        map(response => {
          if (response.status_code === 200) {
            this.decodedToken = jwt.decodeToken(response.user_auth.access_token);
            localStorage.setItem('auth_tkn', response.user_auth.access_token);
            localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
            this.router.navigate(['/table-layout'])
          }
        }),
        catchError(this.erroHandler));
  }  
  
  public isAuthenticated(): boolean {
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }

  public logout(): void {
    localStorage.removeItem('auth_tkn');
    localStorage.removeItem('auth_meta');

    this.decodedToken = new DecodedToken();
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }

  postUserSignup(data) {
    return this.http
      .post<UserModel>(`${environment.DIYANA_API}/user/signup/`, data)
      .pipe(
        catchError(this.erroHandler));
  }
}