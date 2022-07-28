import { Component, OnInit } from '@angular/core';
import {  UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { LevelService } from 'app/_services/level.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-level-create',
  templateUrl: './level-create.component.html',
  styleUrls: ['./level-create.component.css']
})
export class LevelCreateComponent implements OnInit {
  $levelList: Observable<any>
  tempUserArray: any[]
  selected: string
  userId: string

  levelForm = new UntypedFormGroup({
    first_name: new UntypedFormControl(''),
    last_name: new UntypedFormControl(''),
    fav_sub: new UntypedFormControl,
    level: new UntypedFormControl,
    guardian: new UntypedFormControl,
    package_set: new UntypedFormControl,
    education_id: new UntypedFormControl
  });
  constructor(
    private $level: LevelService,
  ) { }

  ngOnInit(): void {
    this.$levelList = this.$level.getLevelAll().pipe(map(x => {
      this.tempUserArray = x.data
      return x.data;
    }))
  }

  onSubmit() {
    let postJson = {
      name : this.levelForm.get('name').value,
      rank : this.levelForm.get('rank').value
    }
    this.$level.postLevel(postJson).subscribe(x => console.log(x))
  }
}
