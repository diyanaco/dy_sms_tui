import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentService } from 'app/_services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm = this.formBuilder.group({
    first_name: '',
    last_name: '',
    fav_sub: '',
    level: '',
    guardian: '',
    package_set: '',
    education_id: ''
  });
  constructor(
    private $student: StudentService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Hello")
    let postJson = {
      //Temporary only
      user_id: "0eb47d74-09a2-402a-84cd-6e7cdf050679",
      fav_sub: this.studentForm.get('fav_sub').value
    }
    this.$student.postStudent(postJson).subscribe(x => console.log(x))
  }
}
