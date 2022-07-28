import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components-primary/student/student.component';
import { StudentCreateComponent } from './components-primary/student/student-create/student-create.component';
import { StudentEditComponent } from './components-primary/student/student-edit/student-edit.component';
import { StudentViewComponent } from './components-primary/student/student-view/student-view.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http'
import { StudentService } from './_services/student.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentSecondaryModule } from './components-secondary/components-secondary.module';
import { ComponentPrimaryModule } from './components-primary/components-primary.module';
import { TableLayoutComponent } from './components-primary/table-layout/table-layout.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './components-primary/login/login.component'
import { RouterModule } from '@angular/router';
import { MatSliderModule} from "@angular/material/slider"
import {MatCardModule} from '@angular/material/card';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { primaryReducer } from './store/primary.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatSliderModule,
    MatCardModule,
    RouterModule,
    ComponentSecondaryModule,
    ComponentPrimaryModule,
    BrowserAnimationsModule,
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   // logOnly: environment.production,
    // }),
    // StoreModule.forRoot(primaryReducer)
    StoreModule.forFeature("primary", primaryReducer),
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
