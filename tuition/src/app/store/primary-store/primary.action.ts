import { createAction , props} from '@ngrx/store';
import { BranchModel } from 'app/model/branch.model';
import { GuardianModel } from 'app/model/guardian.model';
import { LevelModel } from 'app/model/level.model';
import { StudentModel } from 'app/model/student.model';
import { SubjectModel } from 'app/model/subject.model';
import { UserModel } from 'app/model/user.model';

const STUDENT_GET_ALL_INIT = '[Student Component] Retrieve data Init'
const STUDENT_GET_ALL_SUCCESS = '[Student Component] Retrieve data Success'
const STUDENT_GET_ALL_FAILURE = '[Student Component] Retrieve data Failure'

const LEVEL_GET_ALL_INIT = '[Level Component] Retrieve data Init'
const LEVEL_GET_ALL_SUCCESS = '[Level Component] Retrieve data Success'
const LEVEL_GET_ALL_FAILURE = '[Level Component] Retrieve data Failure'

const SUBJECT_GET_ALL_INIT = '[Subject Component] Retrieve data Init'
const SUBJECT_GET_ALL_SUCCESS = '[Subject Component] Retrieve data Success'
const SUBJECT_GET_ALL_FAILURE = '[Subject Component] Retrieve data Failure'

const CONFIRMED_USER_GET_ALL_INIT = '[User Component] Retrieve data Init'
const CONFIRMED_USER_GET_ALL_SUCCESS = '[User Component] Retrieve data Success'
const CONFIRMED_USER_GET_ALL_FAILURE = '[User Component] Retrieve data Failure'

const GUARDIAN_GET_ALL_INIT = '[Guardian Component] Retrieve data Init'
const GUARDIAN_GET_ALL_SUCCESS = '[Guardian Component] Retrieve data Success'
const GUARDIAN_GET_ALL_FAILURE = '[Guardian Component] Retrieve data Failure'

const BRANCH_GET_ALL_INIT = '[Branch Component] Retrieve data Init'
const BRANCH_GET_ALL_SUCCESS = '[Branch Component] Retrieve data Success'
const BRANCH_GET_ALL_FAILURE = '[Branch Component] Retrieve data Failure'

const LOAD_ON_SELECTED_BRANCH = '[All Component] Retrieve data based on branch'

export const studentGetAllActionInit = createAction(STUDENT_GET_ALL_INIT);
export const studentGetAllActionSuccess = createAction(STUDENT_GET_ALL_SUCCESS, props<{student : StudentModel[]}>());
export const studentGetAllActionFailure = createAction(STUDENT_GET_ALL_FAILURE, props<{message : string}>());

export const levelGetAllActionInit = createAction(LEVEL_GET_ALL_INIT);
export const levelGetAllActionSuccess = createAction(LEVEL_GET_ALL_SUCCESS, props<{level : LevelModel[]}>());
export const levelGetAllActionFailure = createAction(LEVEL_GET_ALL_FAILURE, props<{message : string}>());

export const subjectGetAllActionInit = createAction(SUBJECT_GET_ALL_INIT);
export const subjectGetAllActionSuccess = createAction(SUBJECT_GET_ALL_SUCCESS, props<{subject : SubjectModel[]}>());
export const subjectGetAllActionFailure = createAction(SUBJECT_GET_ALL_FAILURE, props<{message : string}>());

export const confirmedUserGetAllActionInit = createAction(CONFIRMED_USER_GET_ALL_INIT);
export const confirmedUserGetAllActionSuccess = createAction(CONFIRMED_USER_GET_ALL_SUCCESS, props<{confirmedUser : UserModel[]}>());
export const confirmedUserGetAllActionFailure = createAction(CONFIRMED_USER_GET_ALL_FAILURE, props<{message : string}>());

export const guardianGetAllActionInit = createAction(GUARDIAN_GET_ALL_INIT);
export const guardianGetAllActionSuccess = createAction(GUARDIAN_GET_ALL_SUCCESS, props<{guardian : GuardianModel[]}>());
export const guardianGetAllActionFailure = createAction(GUARDIAN_GET_ALL_FAILURE, props<{message : string}>());

export const branchGetAllActionInit = createAction(BRANCH_GET_ALL_INIT);
export const branchGetAllActionSuccess = createAction(BRANCH_GET_ALL_SUCCESS, props<{branch : BranchModel[]}>());
export const branchGetAllActionFailure = createAction(BRANCH_GET_ALL_FAILURE, props<{message : string}>());

export const loadOnSelectedBranch = createAction(LOAD_ON_SELECTED_BRANCH, props<{message : string}>());

