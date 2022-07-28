import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserModel} from '../model/user.model';
import { StudentModel } from 'app/model/student.model';
import { ResponseModel } from 'app/model/response.model';


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
  getStudent(student_id : string): Observable<ResponseModel<StudentModel>> {
    return this.http
      .get<ResponseModel<StudentModel>>(`${environment.DIYANA_API}/student/` + student_id)
      .pipe(
        catchError(this.erroHandler));
  }

  getStudentAll(): Observable<ResponseModel<StudentModel>> {
    console.log("hello")
    return this.http
      .get<ResponseModel<StudentModel>>(`${environment.DIYANA_API}/student/all`)
      .pipe(
        catchError(this.erroHandler));
  }

  postStudent(data): Observable<ResponseModel<StudentModel>> {
    return this.http
      .post<ResponseModel<StudentModel>>(`${environment.DIYANA_API}/student/`, data)
      .pipe(
        catchError(this.erroHandler)
      )
  }
}