import { LevelModel } from "app/model/level.model";
import { StudentModel } from "app/model/student.model";
import { SubjectModel } from "app/model/subject.model";

export interface PrimaryState {
    subject: SubjectModel[];
    level: LevelModel[];
    student : StudentModel[]
  }

  export const initialState : PrimaryState = {
    subject : null,
    level : null,
    student : null
  }