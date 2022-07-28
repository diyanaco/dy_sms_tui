import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community'
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators'
import {SubjectService} from '../../../_services/subject.service'

@Component({
  selector: 'app-subject-view',
  templateUrl: './subject-view.component.html',
  styleUrls: ['./subject-view.component.scss']
})
export class SubjectViewComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { headerName : "Subject ID", field: 'id' },
    { headerName : "Subject Name", field: 'name' },
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
  subject_id : string;
  userArray : any = [];
  gridApi: any;
  gridColumnApi: any;
  constructor(
    private router : Router,
    private http: HttpClient,
    private subjectService : SubjectService) { }

  ngOnInit(){
    this.subject_id = "9"
  }

  onGridReady(params : GridReadyEvent){
    this.rowData$ = this.subjectService.getSubjectAll().pipe(
      map((x :any )=>x.subject))
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.setDomLayout("autoHeight");
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
  
  onCreate(){
    this.router.navigateByUrl('/layout/form-layout/create-subject')
  }
}
