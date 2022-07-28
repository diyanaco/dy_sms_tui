import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'app/_services/student.service';
import { UserService } from 'app/_services/user.service'
import { Observable } from 'rxjs';
import { UserModel } from 'app/model/user.model';
import { filter, map } from 'rxjs/operators'
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  //TODO #30 Seperate message from the model itself
  //UserModel can be split into response message and actual UserModel
  //confirmed_user will be of that new UserModel without the response message
  confirmed_user: Observable<any>
  tempUserArray: any[]
  selected: string
  userId: string

  // studentForm = this.formBuilder.group({
  //   first_name: new FormControl(),
  //   last_name: '',
  //   fav_sub: '',
  //   level: '',
  //   guardian: '',
  //   package_set: '',
  //   education_id: ''
  // });
  studentForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    fav_sub: new FormControl,
    level: new FormControl,
    guardian: new FormControl,
    package_set: new FormControl,
    education_id: new FormControl
  });
  constructor(
    private $student: StudentService,
    private formBuilder: FormBuilder,
    private $user: UserService
  ) { }

  ngOnInit(): void {
    this.confirmed_user = this.$user.getUserAll().pipe(map(x => {
      this.tempUserArray = x.user
      return x.user;
    }))
  }

  onSubmit() {
    let postJson = {
      user_id: this.userId,
      fav_sub: this.studentForm.get('fav_sub').value
    }
    this.$student.postStudent(postJson).subscribe(x => console.log(x))
  }

  onUserChange(event : MatSelectChange) {
    if (event) {
      this.userId = event.value
      let tempUser = this.tempUserArray.filter(x => x.id == this.userId)[0]
      this.studentForm.get('first_name').setValue(tempUser.first_name)
      this.studentForm.get('last_name').setValue(tempUser.last_name)
      this.studentForm.get('fav_sub').setValue(tempUser.fav_sub)

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
}
