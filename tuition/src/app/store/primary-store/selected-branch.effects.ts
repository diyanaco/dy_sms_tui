import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LevelService } from 'app/_services/level.service';
import { StudentService } from 'app/_services/student.service';
import { SubjectService } from 'app/_services/subject.service';
import { EMPTY } from 'rxjs';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  levelGetAllActionFailure, confirmedUserGetAllActionInit,
  branchGetAllActionInit, levelGetAllActionInit, confirmedUserGetAllActionFailure, 
  confirmedUserGetAllActionSuccess, levelGetAllActionSuccess, studentGetAllActionFailure, 
  studentGetAllActionInit, studentGetAllActionSuccess, subjectGetAllActionFailure, 
  subjectGetAllActionInit, subjectGetAllActionSuccess, branchGetAllActionSuccess, 
  branchGetAllActionFailure,
  guardianGetAllActionInit,
  guardianGetAllActionSuccess,
  guardianGetAllActionFailure,
  loadOnSelectedBranch
} from './primary.action';
import { UserService } from 'app/_services';
import { BranchModel } from 'app/model/branch.model';
import { BranchService } from 'app/_services/branch.service';
import { GuardianService } from 'app/_services/guardian.service';
import { ResponseModel } from 'app/model/response.model';
import { GuardianModel } from 'app/model/guardian.model';
import { SubjectModel } from 'app/model/subject.model';
import { LevelModel } from 'app/model/level.model';
import { StudentModel } from 'app/model/student.model';
import { UserModel } from 'app/model/user.model';

@Injectable()
export class SelectedBranchEffects {

  initLoadOnSelectedBranch$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(loadOnSelectedBranch),
        mergeMap(() => this.student$.getStudentAll()
          .pipe(
            //TODO 
            map((res: ResponseModel<StudentModel>) => {
              console.log(res)
              return studentGetAllActionSuccess({ student: res.data })
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
            map((res: ResponseModel<LevelModel>) => {
              console.log(res)
              return levelGetAllActionSuccess({ level: res.data })
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
            map((res: ResponseModel<SubjectModel>) => {
              console.log(res)
              return subjectGetAllActionSuccess({ subject: res.data })
            }),
            catchError((err) => of(subjectGetAllActionFailure({ message: err })))
          )))
  })

  loadBranch$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(branchGetAllActionInit),
        mergeMap(() => this.branch$.getBranchAll()
          .pipe(
            map((res: ResponseModel<BranchModel>) => {
              console.log(res)
              return branchGetAllActionSuccess({ branch: res.data })
            }),
            catchError((err) => of(branchGetAllActionFailure({ message: err })))
          )))
  })

  loadGuardian$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(guardianGetAllActionInit),
        mergeMap(() => this.guardian$.getGuardianAll()
          .pipe(
            map((res: ResponseModel<GuardianModel>) => {
              console.log(res)
              return guardianGetAllActionSuccess({ guardian: res.data })
            }),
            catchError((err) => of(guardianGetAllActionFailure({ message: err })))
          )))
  })


  constructor(
    private actions$: Actions,
    private student$: StudentService,
    private level$: LevelService,
    private subject$: SubjectService,
    private user$: UserService,
    private branch$: BranchService,
    private guardian$ : GuardianService
  ) { }
}