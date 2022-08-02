import { Injectable } from "@angular/core";
import { BranchModel } from "app/model/branch.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable( {
    providedIn: 'root'
}) 
export class PassValueGuidService {
  private node:Subject<string> = new BehaviorSubject<string>("");

  get guid$(){
    return this.node.asObservable()
  }

  addGuid(data:string) {
    this.node.next(data);
  }
}