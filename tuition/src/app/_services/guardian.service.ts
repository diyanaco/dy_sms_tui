import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserModel} from '../model/user.model';
import { GuardianModel } from 'app/model/guardian.model';
import { ResponseModel } from 'app/model/response.model';


@Injectable({
    providedIn : 'root'
}
)
export class GuardianService {

  constructor(private http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  getGuardian(guardian_id : string): Observable<ResponseModel<GuardianModel>> {
    return this.http
      .get<ResponseModel<GuardianModel>>(`${environment.DIYANA_API}/guardian/` + guardian_id)
      .pipe(
        catchError(this.erroHandler));
  }

  getGuardianAll(): Observable<ResponseModel<GuardianModel>> {
    return this.http
      .get<ResponseModel<GuardianModel>>(`${environment.DIYANA_API}/guardian/all`)
      .pipe(
        catchError(this.erroHandler));
  }

  postGuardian(data): Observable<ResponseModel<GuardianModel>> {
    return this.http
      .post<ResponseModel<GuardianModel>>(`${environment.DIYANA_API}/guardian/`, data)
      .pipe(
        catchError(this.erroHandler)
      )
  }
}