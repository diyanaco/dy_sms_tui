import { createAction , props} from '@ngrx/store';
import { LevelModel } from 'app/model/level.model';
import { StudentModel } from 'app/model/student.model';
import { SubjectModel } from 'app/model/subject.model';

const STUDENT_GET_ALL_INIT = '[Student Component] Retrieve data Init'
const STUDENT_GET_ALL_SUCCESS = '[Student Component] Retrieve data Success'
const STUDENT_GET_ALL_FAILURE = '[Student Component] Retrieve data Failure'

const LEVEL_GET_ALL_INIT = '[Level Component] Retrieve data Init'
const LEVEL_GET_ALL_SUCCESS = '[Level Component] Retrieve data Success'
const LEVEL_GET_ALL_FAILURE = '[Level Component] Retrieve data Failure'

const SUBJECT_GET_ALL_INIT = '[Subject Component] Retrieve data Init'
const SUBJECT_GET_ALL_SUCCESS = '[Subject Component] Retrieve data Success'
const SUBJECT_GET_ALL_FAILURE = '[Subject Component] Retrieve data Failure'

export const studentGetAllActionInit = createAction(STUDENT_GET_ALL_INIT);
export const studentGetAllActionSuccess = createAction(STUDENT_GET_ALL_SUCCESS, props<{student : StudentModel[]}>());
export const studentGetAllActionFailure = createAction(STUDENT_GET_ALL_FAILURE, props<{message : string}>());

export const levelGetAllActionInit = createAction(LEVEL_GET_ALL_INIT);
export const levelGetAllActionSuccess = createAction(LEVEL_GET_ALL_SUCCESS, props<{level : LevelModel[]}>());
export const levelGetAllActionFailure = createAction(LEVEL_GET_ALL_FAILURE, props<{message : string}>());

export const subjectGetAllActionInit = createAction(SUBJECT_GET_ALL_INIT);
export const subjectGetAllActionSuccess = createAction(SUBJECT_GET_ALL_SUCCESS, props<{subject : SubjectModel[]}>());
export const subjectGetAllActionFailure = createAction(SUBJECT_GET_ALL_FAILURE, props<{message : string}>());

