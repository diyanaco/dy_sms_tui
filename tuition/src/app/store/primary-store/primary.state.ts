import { BranchModel } from "app/model/branch.model";
import { GuardianModel } from "app/model/guardian.model";
import { LevelModel } from "app/model/level.model";
import { StudentModel } from "app/model/student.model";
import { SubjectModel } from "app/model/subject.model";
import { UserModel } from "app/model/user.model";

export interface PrimaryState {
    subjects: SubjectModel[];
    levels: LevelModel[];
    students : StudentModel[];
    confirmed_users : UserModel[];
    guardians : GuardianModel[];
    branches : BranchModel[];
  }

  export const initialState : PrimaryState = {
    subjects : [],
    levels : [],
    students : [],
    confirmed_users : [],
    guardians : [],
    branches : []
  }