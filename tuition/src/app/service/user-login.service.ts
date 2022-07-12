import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserModel} from '../model/user.model';


@Injectable({
    providedIn : 'root'
}
)
export class UserLoginService {

  constructor(private http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  postUserLogin(email : string, password : string, iq : number){
    let dict = {
      "email" : email,
      "password" : password,
    }
    return this.http
      .post<UserModel>(`${environment.DIYANA_API}/user-login/`, dict)
      .pipe(
        catchError(this.erroHandler));
  }
}