import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community'
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators'

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'first_name' },
    { field: 'last_name' }
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

  userArray : any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(){
    console.log("Success")
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
    this.rowData$ = this.http.get<any>('http://127.0.0.1:5000/user/1').pipe(map(x=>x.user),
    toArray())
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
