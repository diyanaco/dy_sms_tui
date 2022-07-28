import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
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

  levelForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    fav_sub: new FormControl,
    level: new FormControl,
    guardian: new FormControl,
    package_set: new FormControl,
    education_id: new FormControl
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
