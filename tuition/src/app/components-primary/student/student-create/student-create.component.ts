import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'app/_services/student.service';
import { UserService } from 'app/_services/user.service'
import { Observable } from 'rxjs';
import { UserModel } from 'app/model/user.model';
import { filter, map, mergeMap, first, take } from 'rxjs/operators'
import { MatSelectChange } from '@angular/material/select';
import { SubjectService } from 'app/_services/subject.service';
import { LevelService } from 'app/_services/level.service';
import { PrimaryState } from 'app/store/primary-store/primary.state';
import { Store } from '@ngrx/store';
import { StudentModel } from 'app/model/student.model';
import { SubjectModel } from 'app/model/subject.model';
import { LevelModel } from 'app/model/level.model';
import { selectBranches, selectGuardians, selectLevels, selectStudents, selectSubjects, selectUsers } from 'app/store/primary-store/primary.selector';
import { BranchModel } from 'app/model/branch.model';
import { GuardianModel } from 'app/model/guardian.model';
import { SubSink } from 'subsink';
import { PackageSetModel } from 'app/model/package-set.model';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit , AfterViewInit, OnDestroy{
  $confirmed_user: Observable<UserModel[]>
  $user_selected: Observable<UserModel>
  $student_list: Observable<StudentModel[]>
  $subject_list: Observable<SubjectModel[]>
  $level_list: Observable<LevelModel[]>
  $branch_list: Observable<BranchModel[]>
  $guardian_list: Observable<GuardianModel[]>
  $package_set_list : Observable<PackageSetModel[]>
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
  //   branch_id: ''
  // });
  studentForm = new FormGroup({
    fav_sub: new FormControl(null),
    guardian_id: new FormControl(null),
    branch_id: new FormControl(null),
    level_id: new FormControl(null),
    first_name: new FormControl(null),
    last_name: new FormControl(null),
    package_set_id: new FormControl(''),
  });
  constructor(
    private $student : StudentService,
    private formBuilder: FormBuilder,
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
      guardian_id: this.studentForm.get('guardian_id').value,
      branch_id: this.studentForm.get('branch_id').value,
      level_id: this.studentForm.get('level_id').value,
      // package_set_id: this.studentForm.get('package_set_id').value,
    }
    console.log(postJson)
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


