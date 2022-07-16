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
export class UserAuthService {

  constructor(private http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  postUserLogin(data){
    return this.http
      .post<UserModel>(`${environment.DIYANA_API}/user/login/`, data)
      .pipe(
        catchError(this.erroHandler));
  }
  postUserSignup(data){
    return this.http
      .post<UserModel>(`${environment.DIYANA_API}/user/signup/`, data)
      .pipe(
        catchError(this.erroHandler));
  }
}