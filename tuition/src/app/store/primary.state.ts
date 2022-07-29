import { LevelModel } from "app/model/level.model";
import { StudentModel } from "app/model/student.model";
import { SubjectModel } from "app/model/subject.model";
import { UserModel } from "app/model/user.model";

export interface PrimaryState {
    subject: SubjectModel[];
    level: LevelModel[];
    student : StudentModel[];
    confirmed_user : UserModel[];
  }

  export const initialState : PrimaryState = {
    subject : [],
    level : [],
    student : [],
    confirmed_user : []
  }