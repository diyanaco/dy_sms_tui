import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SubjectService } from 'app/_services/subject.service';
import { UserService } from 'app/_services/user.service'
import { Observable } from 'rxjs';
import { UserModel } from 'app/model/user.model';
import { filter, map } from 'rxjs/operators'
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {
  $subjectList: Observable<any>
  tempUserArray: any[]
  selected: string
  userId: string

  subjectForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    fav_sub: new FormControl,
    level: new FormControl,
    guardian: new FormControl,
    package_set: new FormControl,
    education_id: new FormControl
  });
  constructor(
    private $subject: SubjectService,
    private formBuilder: FormBuilder,
    private $user: UserService
  ) { }

  ngOnInit(): void {
    this.$subjectList = this.$subject.getSubjectAll().pipe(map(x => {
      this.tempUserArray = x.data
      return x.data;
    }))
  }

  onSubmit() {
    let postJson = {
      name : this.subjectForm.get('name').value
    }
    this.$subject.postSubject(postJson).subscribe(x => console.log(x))
  }
}
