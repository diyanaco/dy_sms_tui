import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community'
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators'
import {LevelService} from '../../../_services/level.service'

@Component({
  selector: 'app-level-view',
  templateUrl: './level-view.component.html',
  styleUrls: ['./level-view.component.scss']
})
export class LevelViewComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { headerName : "Level ID", field: 'id' },
    { headerName : "Level Name", field: 'name' },
    { headerName : "Level Rank", field: 'rank' },
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
  level_id : string;
  userArray : any = [];
  gridApi: any;
  gridColumnApi: any;
  constructor(
    private router : Router,
    private http: HttpClient,
    private levelService : LevelService) { }

  ngOnInit(){
    this.level_id = "9"
  }

  onGridReady(params : GridReadyEvent){
    this.rowData$ = this.levelService.getLevelAll().pipe(
      map((x :any )=>x.level))
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
    this.router.navigateByUrl('/layout/form-layout/create-level')
  }

}
