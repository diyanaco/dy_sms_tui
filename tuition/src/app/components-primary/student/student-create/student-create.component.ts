import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { StudentService } from 'app/_services/student.service';
import { UserService } from 'app/_services/user.service'
import { Observable } from 'rxjs';
import { UserModel } from 'app/model/user.model';
import { filter, map, mergeMap, first, take } from 'rxjs/operators'
import { MatSelectChange } from '@angular/material/select';
import { SubjectService } from 'app/_services/subject.service';
import { LevelService } from 'app/_services/level.service';
import { PrimaryState } from 'app/store/primary.state';
import { Store } from '@ngrx/store';
import { StudentModel } from 'app/model/student.model';
import { SubjectModel } from 'app/model/subject.model';
import { LevelModel } from 'app/model/level.model';
import { selectBranches, selectGuardians, selectLevels, selectStudents, selectSubjects, selectUsers } from 'app/store/primary.selector';
import { BranchModel } from 'app/model/branch.model';
import { GuardianModel } from 'app/model/guardian.model';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit , AfterViewInit, OnDestroy{
  //TODO #30 Seperate message from the model itself
  //UserModel can be split into response message and actual UserModel
  //confirmed_user will be of that new UserModel without the response message
  $confirmed_user: Observable<UserModel[]>
  $user_selected: Observable<UserModel>
  $student_list: Observable<StudentModel[]>
  $subject_list: Observable<SubjectModel[]>
  $level_list: Observable<LevelModel[]>
  $branch_list: Observable<BranchModel[]>
  $guardian_list: Observable<GuardianModel[]>
  tempUserArray: any[]
  tempLevelArray: any[]
  tempSubjectArray: any[]
  selected: string
  userId: string
  private subs = new SubSink()

  // studentForm = this.formBuilder.group({
  //   first_name: new FormControl(),
  //   last_name: '',
  //   fav_sub: '',
  //   level: '',
  //   guardian: '',
  //   package_set: '',
  //   education_id: ''
  // });
  studentForm = new UntypedFormGroup({
    first_name: new UntypedFormControl(''),
    last_name: new UntypedFormControl(''),
    fav_sub: new UntypedFormControl,
    level: new UntypedFormControl,
    guardian: new UntypedFormControl,
    package_set: new UntypedFormControl,
    education_id: new UntypedFormControl
  });
  constructor(
    private $student: StudentService,
    private $level: LevelService,
    private $subject: SubjectService,
    private formBuilder: UntypedFormBuilder,
    private $user: UserService,
    private store: Store<PrimaryState>
  ) { }

  ngOnInit(): void {
    this.$confirmed_user = this.store.select(selectUsers)
    this.$student_list = this.store.select(selectStudents)
    this.$level_list = this.store.select(selectLevels)
    this.$subject_list = this.store.select(selectSubjects)
    this.$branch_list = this.store.select(selectBranches)
    this.$guardian_list = this.store.select(selectGuardians)
    // this.$confirmed_user = this.$user.getUserAll().pipe(map(x => {
    //   this.tempUserArray = x.user
    //   return x.user;
    // }), mergeMap(x=>{
    //   return this.$level.getLevelAll().pipe(map(x=>{
    //     this.tempLevelArray = x.level
    //     return x.level
    //   }))
    // }), mergeMap(x=>{
    //   return this.$subject.getSubjectAll().pipe(map(x=>{
    //     this.tempSubjectArray =  x.subject
    //     return x.subject
    //   }))
    // }))

    // this.$confirmed_user = this.$user.getUserAll().pipe(map(x => {
    //   this.tempUserArray = x.user
    //   return x.user;
    // }))
    // this.$level_list = this.$level.getLevelAll().pipe(map(x => {
    //   this.tempLevelArray = x.level
    //   return x.level;
    // }))
    // this.$subject_list = this.$subject.getSubjectAll().pipe(map(x => {
    //   this.tempSubjectArray = x.subject
    //   return x.subject;
    // }))
  }
  
  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {
      
  }

  onSubmit() {
    let postJson = {
      user_id: this.userId,
      fav_sub: this.studentForm.get('fav_sub').value,
      level: this.studentForm.get('level').value
    }
    this.$student.postStudent(postJson).subscribe(x => console.log(x))
  }

  onUserChange(event: MatSelectChange) {
    if (event) {
      this.userId = event.value
      this.subs.sink = this.store.select(selectUsers).pipe(
        map(user => {
          let filteredUser = user.filter(user => user.id == this.userId)[0]
          console.log(filteredUser.first_name)
          this.studentForm.get('first_name').setValue(filteredUser.first_name)
          this.studentForm.get('last_name').setValue(filteredUser.last_name)
          return user[0]
        })).subscribe()


      // this.$confirmed_user.pipe(
      //   filter(x=>x.id == this.user_id),
      //   map(x=>{
      //   this.studentForm.get('first_name').setValue(x[0].first_name)
      //   this.studentForm.get('last_name').setValue(x.last_name)
      //   this.studentForm.get('fav_sub').setValue(x.fav_sub)
      // }))

      //TODO #31 Solve autopopulating from observable
      // this.confirmed_user.pipe(
      //   filter(x=>x.id == this.userId),
      //   map(x =>{
      //     this.first_name_var = x.first_name
      //     this.last_name_var = x.last_name
      //     this.studentForm.patchValue({
      //       first_name: x.first_name,
      //       last_name : x.last_name
      //     })
      //     return x
      //   })).subscribe(x=>{
      //     console.log(x.first_name)
      //     this.studentForm.get('first_name').setValue(x.first_name);
      //   }
      //   )
    }
  }
  // onSubjectChange(event: MatSelectChange) {
  //   if (event) {
  //     let tempUser = this.tempSubjectArray.filter(x => x.id == event.value)[0]
  //     this.studentForm.get('fav_sub').setValue(tempUser.name)
  //   }
  // }

  // onLevelChange(event: MatSelectChange) {
  //   if (event) {
  //     let tempUser = this.tempLevelArray.filter(x => x.id == event.value)[0]
  //     this.studentForm.get('level').setValue(tempUser.name)
  //   }
  // }
}


