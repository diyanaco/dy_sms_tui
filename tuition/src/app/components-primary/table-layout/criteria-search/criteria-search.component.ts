import { OnInit, OnDestroy, Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
//TODO: #26 Work on CriteriaSearchCompoennt
@Component({
  selector: "app-criteria-search",
  styleUrls: ["criteria-search.component.scss"],
  templateUrl: "criteria-search.component.html"
})
export class CriteriaSearchComponent implements OnInit, OnDestroy {
  @Input() set form( grp : FormGroup) {
      Object.keys(grp.controls).forEach(ctrl => {
        console.log(ctrl)
      })
  };
  criteriaForm = new FormGroup({
    fullName: new FormControl(null),
    studentId: new FormControl(null),
    className: new FormControl(null),
  });
  @Input() tableName : string;
  ngOnInit() {
    console.log(this.form)
    console.log(this.tableName)
  }

  ngOnDestroy() {

  }
}