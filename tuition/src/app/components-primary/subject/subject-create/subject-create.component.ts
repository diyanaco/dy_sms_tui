import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
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

  subjectForm = new UntypedFormGroup({
    first_name: new UntypedFormControl(''),
    last_name: new UntypedFormControl(''),
    fav_sub: new UntypedFormControl,
    level: new UntypedFormControl,
    guardian: new UntypedFormControl,
    package_set: new UntypedFormControl,
    education_id: new UntypedFormControl
  });
  constructor(
    private $subject: SubjectService,
    private formBuilder: UntypedFormBuilder,
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
