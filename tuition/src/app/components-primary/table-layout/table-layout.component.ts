import { Component, OnInit, HostBinding, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PrimaryState } from 'app/store/primary.state';
import { levelGetAllActionInit, studentGetAllActionInit, subjectGetAllActionInit } from 'app/store/primary.action';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.css'],
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //       height: '200px',
  //       opacity: 1,
  //       //backgroundColor: 'yellow'
  //     })),
  //     state('closed', style({
  //       height: '100px',
  //       opacity: 0.8,
  //       //backgroundColor: 'blue'
  //     })),
  //     transition('open => closed', [
  //       animate('0.5s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ],
})
export class TableLayoutComponent implements OnInit {
  isOpen = true;
  childComponentName: string
  //TODO: #25 Generate a dynamic search criteria form based on specific listing component columns
  criteriaForm = new UntypedFormGroup({
    fullName: new UntypedFormControl(''),
    studentID: new UntypedFormControl(''),
    class: new UntypedFormControl(''),
  })
  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }
  constructor(
    private store : Store<PrimaryState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(studentGetAllActionInit())
    this.store.dispatch(levelGetAllActionInit())
    this.store.dispatch(subjectGetAllActionInit())
  }

  componentAdded($event) {
    console.log($event.constructor.name)
    // this.childComponentName =
    switch ($event.constructor.name) {
      case "StudentViewComponent":
        this.childComponentName = "Student"
        break
      case "LevelViewComponent":
        this.childComponentName = "Level"
        break
      case "SubjectViewComponent":
        this.childComponentName = "Subject"
        break
    }

  }
}
