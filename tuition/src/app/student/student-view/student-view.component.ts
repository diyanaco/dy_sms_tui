import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community'
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators'
import {StudentService} from './../../service/student.service'

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { headerName : "Student ID", field: 'id' },
    { headerName : "First Name", field: 'first_name' },
    { headerName :  "Last Name", field: 'last_name' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  student_id : string;
  userArray : any = [];
  gridApi: any;
  gridColumnApi: any;
  constructor(
    private http: HttpClient,
    private studentService : StudentService) { }

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
    this.rowData$ = this.studentService.getStudents(this.student_id).pipe(
      map((x :any )=>x.user),
      toArray())
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

}
