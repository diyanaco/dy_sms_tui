import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LevelService } from 'app/_services/level.service';
import { StudentService } from 'app/_services/student.service';
import { SubjectService } from 'app/_services/subject.service';
import { EMPTY } from 'rxjs';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { levelGetAllActionFailure, confirmedUserGetAllActionInit,levelGetAllActionInit,confirmedUserGetAllActionFailure, confirmedUserGetAllActionSuccess,levelGetAllActionSuccess, studentGetAllActionFailure, studentGetAllActionInit, studentGetAllActionSuccess, subjectGetAllActionFailure, subjectGetAllActionInit, subjectGetAllActionSuccess } from './primary.action';
import { UserService } from 'app/_services';

@Injectable()
export class PrimaryEffects {

  loadConfirmedUser$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(confirmedUserGetAllActionInit),
        mergeMap(() => this.user$.getUserAll()
          .pipe(
            //TODO 
            map((res: any) => {
              console.log(res, "confirmed user")
              return confirmedUserGetAllActionSuccess({ confirmedUser: res.user })
            }),
            catchError((err) => of(confirmedUserGetAllActionFailure({ message: err })))
          )))
  })

  loadStudent$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(studentGetAllActionInit),
        mergeMap(() => this.student$.getStudentAll()
          .pipe(
            //TODO 
            map((res: any) => {
              console.log(res)
              return studentGetAllActionSuccess({ student: res.student })
            }),
            catchError((err) => of(studentGetAllActionFailure({ message: err })))
          )))
  })

  loadLevel$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(levelGetAllActionInit),
        mergeMap(() => this.level$.getLevelAll()
          .pipe(
            map((res: any) => {
              console.log(res)
              return levelGetAllActionSuccess({ level: res.level })
            }),
            catchError((err) => of(levelGetAllActionFailure({ message: err })))
          )))
  })

  loadSubject$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(subjectGetAllActionInit),
        mergeMap(() => this.subject$.getSubjectAll()
          .pipe(
            map((res: any) => {
              console.log(res)
              return subjectGetAllActionSuccess({ subject: res.subject })
            }),
            catchError((err) => of(subjectGetAllActionFailure({ message: err })))
          )))
  })

  constructor(
    private actions$: Actions,
    private student$: StudentService,
    private level$: LevelService,
    private subject$: SubjectService,
    private user$ : UserService
  ) { }
}