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
export class UserService {

  constructor(private http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  getUser(user_id : string): Observable<UserModel> {
    return this.http
      .get<UserModel>(`${environment.DIYANA_API}/user/` + user_id)
      .pipe(
        catchError(this.erroHandler));
  }

  getUserAll(): Observable<UserModel> {
    return this.http
      .get<UserModel>(`${environment.DIYANA_API}/user/all`)
      .pipe(
        catchError(this.erroHandler));
  }
}