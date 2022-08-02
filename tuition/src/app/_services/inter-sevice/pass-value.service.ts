import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BranchModel } from "app/model/branch.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable( {
    providedIn: 'root'
}) 
export class PassValueGuidService {
  private node:Subject<string> = new BehaviorSubject<string>("");
  private formGroup : Subject<FormGroup> = new BehaviorSubject<FormGroup>(null)

  get guid$(){
    return this.node.asObservable()
  }

  getFormGroup$(){
    return this.formGroup.asObservable()
  }

  addGuid(data:string) {
    this.node.next(data);
  }
  addFormGroup(data : FormGroup){
    this.formGroup.next(data)
  }
}