import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UserModel} from '../model/user.model';
import { LevelModel } from 'app/model/level.model';
import { ResponseModel } from 'app/model/response.model';


@Injectable({
    providedIn : 'root'
}
)
export class LevelService {

  constructor(private http: HttpClient) {
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  getLevel(level_id : string): Observable<ResponseModel<LevelModel>> {
    return this.http
      .get<ResponseModel<LevelModel>>(`${environment.DIYANA_API}/level/` + level_id)
      .pipe(
        catchError(this.erroHandler));
  }

  getLevelAll(): Observable<ResponseModel<LevelModel>> {
    return this.http
      .get<ResponseModel<LevelModel>>(`${environment.DIYANA_API}/level/all`)
      .pipe(
        catchError(this.erroHandler));
  }

  postLevel(data): Observable<ResponseModel<LevelModel>> {
    return this.http
      .post<ResponseModel<LevelModel>>(`${environment.DIYANA_API}/level/`, data)
      .pipe(
        catchError(this.erroHandler)
      )
  }
}