import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LevelService } from 'app/_services/level.service';
import { StudentService } from 'app/_services/student.service';
import { SubjectService } from 'app/_services/subject.service';
import { EMPTY } from 'rxjs';
import { createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { levelGetAllActionInit, levelGetAllActionSuccess, studentGetAllActionInit, studentGetAllActionSuccess, subjectGetAllActionInit, subjectGetAllActionSuccess } from './primary.action';

@Injectable()
export class PrimaryEffects {

  loadStudent$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(studentGetAllActionInit),
        mergeMap(() => this.student$.getStudentAll()
          .pipe(
            map(student => studentGetAllActionSuccess()),
            catchError(() => EMPTY)
          )))
  })

  loadLevel$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(levelGetAllActionInit),
        mergeMap(() => this.level$.getLevelAll()
          .pipe(
            map(level => levelGetAllActionSuccess()),
            catchError(() => EMPTY)
          )))
  })

  loadSubject$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(subjectGetAllActionInit),
        mergeMap(() => this.subject$.getSubjectAll()
          .pipe(
            map(subject => subjectGetAllActionSuccess()),
            catchError(() => EMPTY)
          )))
  })

  constructor(
    private actions$: Actions,
    private student$: StudentService,
    private level$: LevelService,
    private subject$: SubjectService
  ) { }
}