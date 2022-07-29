import { LevelModel } from "app/model/level.model";
import { StudentModel } from "app/model/student.model";
import { SubjectModel } from "app/model/subject.model";
import { UserModel } from "app/model/user.model";

export interface PrimaryState {
    subjects: SubjectModel[];
    levels: LevelModel[];
    students : StudentModel[];
    confirmed_users : UserModel[];
  }

  export const initialState : PrimaryState = {
    subjects : [],
    levels : [],
    students : [],
    confirmed_users : []
  }