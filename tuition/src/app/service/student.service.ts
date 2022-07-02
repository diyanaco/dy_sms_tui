import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from './../../environments/environment';
import {UserModel} from '../model/user.model';


@Injectable({
    providedIn : 'root'
}
)
export class StudentService {

  constructor(private http: HttpClient) {
  }

//   private static _handleError(err: HttpErrorResponse | any) {
//     return Observable.throw(err.message || 'Error: Unable to complete request.');
//   }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  // GET list of public, future events
  getStudents(user_id : string): Observable<UserModel> {
    return this.http
      .get<UserModel>(`${environment.DIYANA_API}/user/` + user_id)
      .pipe(
        catchError(this.erroHandler));
  }
}