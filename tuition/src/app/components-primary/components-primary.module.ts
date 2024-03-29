import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { LoginComponent } from './login/login.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentSecondaryModule } from 'app/components-secondary/components-secondary.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select'
import { LevelCreateComponent } from './level/level-create/level-create.component';
import { LevelViewComponent } from './level/level-view/level-view.component';
import { SubjectCreateComponent } from './subject/subject-create/subject-create.component';
import { SubjectViewComponent } from './subject/subject-view/subject-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule ,
    FlexLayoutModule,
    ComponentSecondaryModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MatSelectModule
  ],
  declarations: [
    LoginComponent,
    StudentComponent,
    TableLayoutComponent,
    StudentComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentViewComponent,
    AdminLayoutComponent,
    TableLayoutComponent,
    //UserProfileComponent,
    SignupComponent,
    LevelCreateComponent,
    LevelViewComponent,
    SubjectCreateComponent,
    SubjectViewComponent
  ],
  exports: [
    LoginComponent,
    StudentComponent,
    TableLayoutComponent,
    StudentComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentViewComponent,
    AdminLayoutComponent,
    TableLayoutComponent,
    LoginComponent,
    //UserProfileComponent
  ]
})
export class ComponentPrimaryModule { }
