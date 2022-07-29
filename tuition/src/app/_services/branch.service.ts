import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserModel} from '../model/user.model';
import { BranchModel } from 'app/model/branch.model';
import { ResponseModel } from 'app/model/response.model';


@Injectable({
    providedIn : 'root'
}
)
export class BranchService {

  constructor(private http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  getBranch(branch_id : string): Observable<ResponseModel<BranchModel>> {
    return this.http
      .get<ResponseModel<BranchModel>>(`${environment.DIYANA_API}/branch/` + branch_id)
      .pipe(
        catchError(this.erroHandler));
  }

  getBranchAll(): Observable<ResponseModel<BranchModel>> {
    return this.http
      .get<ResponseModel<BranchModel>>(`${environment.DIYANA_API}/branch/all`)
      .pipe(
        catchError(this.erroHandler));
  }

  postBranch(data): Observable<ResponseModel<BranchModel>> {
    return this.http
      .post<ResponseModel<BranchModel>>(`${environment.DIYANA_API}/branch/`, data)
      .pipe(
        catchError(this.erroHandler)
      )
  }
}