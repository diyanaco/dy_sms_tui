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
    FlexLayoutModule,
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
    LoginComponent,
    //UserProfileComponent
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