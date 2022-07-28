import { LevelModel } from "app/model/level.model";
import { StudentModel } from "app/model/student.model";
import { SubjectModel } from "app/model/subject.model";

export interface PrimaryState {
    subject: SubjectModel[];
    level: LevelModel[];
    student : any[]
  }

  export const initialState : PrimaryState = {
    subject : [],
    level : [],
    student : []
  }