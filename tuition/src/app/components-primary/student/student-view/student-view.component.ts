import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community'
import { StudentModel } from 'app/model/student.model';
import { selectStudents } from 'app/store/primary.selector';
import { PrimaryState } from 'app/store/primary.state';
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators'
import {StudentService} from '../../../_services/student.service'

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { headerName : "User ID", field: 'user_id' },
    { headerName : "Student ID", field: 'id' },
    { headerName : "Fav Subject", field: 'fav_sub' },
    { headerName :  "Created Date", field: 'created_date' },
    { headerName :  "Updated Date", field: 'updated_date' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<StudentModel[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  student_id : string;
  userArray : any = [];
  gridApi: any;
  gridColumnApi: any;
  constructor(
    private router : Router,
    private http: HttpClient,
    private studentService : StudentService,
    private store : Store<PrimaryState>) { }

  ngOnInit(){
    console.log("Success")
    this.student_id = "9"
  }
  // Example load data from sever
  // onGridReady(params: GridReadyEvent) {
  //   this.http.get<any>('http://127.0.0.1:5000/user/1').subscribe(x=>{
  //     console.log(x)
  //     this.userArray.push(x.user)
  //     console.log(this.userArray)
  //   })
  // }
  onGridReady(params : GridReadyEvent){
    // this.rowData$ = this.studentService.getStudentAll().pipe(
    //   map((x :any )=>x.student))
    this.rowData$ = this.store.select(selectStudents)
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    //The ag-grid is not enlarging based on the page height, 
    //so dynamically adjusting the height of the grid
    this.gridApi.setDomLayout("autoHeight");
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  onCreate(){
    this.router.navigateByUrl('/layout/form-layout/create-student')
  }

}
