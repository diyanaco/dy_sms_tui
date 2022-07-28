import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserModel} from '../model/user.model';
import { SubjectModel } from 'app/model/subject.model';
import { ResponseModel } from 'app/model/response.model';


@Injectable({
    providedIn : 'root'
}
)
export class SubjectService {

  constructor(private http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  getSubject(subject_id : string): Observable<ResponseModel<SubjectModel>> {
    return this.http
      .get<ResponseModel<SubjectModel>>(`${environment.DIYANA_API}/subject/` + subject_id)
      .pipe(
        catchError(this.erroHandler));
  }

  getSubjectAll(): Observable<ResponseModel<SubjectModel>> {
    return this.http
      .get<ResponseModel<SubjectModel>>(`${environment.DIYANA_API}/subject/all`)
      .pipe(
        catchError(this.erroHandler));
  }

  postSubject(data): Observable<ResponseModel<SubjectModel>> {
    return this.http
      .post<ResponseModel<SubjectModel>>(`${environment.DIYANA_API}/subject/`, data)
      .pipe(
        catchError(this.erroHandler)
      )
  }
}