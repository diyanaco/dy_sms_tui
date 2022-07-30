import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BranchModel } from 'app/model/branch.model';
import { StudentModel } from 'app/model/student.model';
import { UserModel } from 'app/model/user.model';
import { PrimaryState } from './primary.state';

export const selectPrimaryState = createFeatureSelector<PrimaryState>("primary");
export const selectStudents = createSelector(
    selectPrimaryState,
    (state) => state.students
)
export const selectUsers = createSelector(
    selectPrimaryState,
    (state) => state.confirmed_users
)
export const selectSubjects = createSelector(
    selectPrimaryState,
    (state) => state.subjects
)
export const selectLevels = createSelector(
    selectPrimaryState,
    (state) => state.levels
)
export const selectGuardians = createSelector(
    selectPrimaryState,
    (state) => state.guardians
)
export const selectBranches = createSelector(
    selectPrimaryState,
    (state) => state.branches
)
export const selectStudentByBranch = (props: { branch_id: string }) => createSelector(
    selectStudents,
    selectBranches,
    (students: StudentModel[], branches: BranchModel[]) => {
        if (students && branches) {
            return students.filter((student: StudentModel) => student.branch_id === props.branch_id);
        } else {
            return students;
        }
    }
)
//   );
// export const selectAllSubject = (state: PrimaryState) => state.subject;
// export const selectAllLevel = (state: PrimaryState) => state.level;
// export const selectAllStudent = (state : PrimaryState) => state.student
// export const selectAllConfirmedUser = (state : PrimaryState) => state.confirmed_user

// export const selectedStudent = createSelector(
//     (selectAllLevel, props)  => state.student[props.id]
// )

// export const selectStudentUser = createSelector(
//   selectAllStudent,
//   selectAllConfirmedUser,
//   (student: StudentModel[], user: UserModel[]) => {
//     if (student && user) {
//       return user.filter((user: UserModel) => user.id === student.id);
//     } else {
//       return user;
//     }
//   }
// );