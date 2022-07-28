import { createAction } from '@ngrx/store';

const STUDENT_GET_ALL_INIT = '[Student Component] Retrieve data Init'
const STUDENT_GET_ALL_SUCCESS = '[Student Component] Retrieve data Success'
const STUDENT_GET_ALL_FAILURE = '[Student Component] Retrieve data Failure'

const LEVEL_GET_ALL_INIT = '[Student Component] Retrieve data'
const LEVEL_GET_ALL_SUCCESS = '[Student Component] Retrieve data Success'
const LEVEL_GET_ALL_FAILURE = '[Student Component] Retrieve data Failure'

const SUBJECT_GET_ALL_INIT = '[Student Component] Retrieve data'

const SUBJECT_GET_ALL_SUCCESS = '[Student Component] Retrieve data Success'
const SUBJECT_GET_ALL_FAILURE = '[Student Component] Retrieve data Failure'

export const studentGetAllActionInit = createAction(STUDENT_GET_ALL_INIT);
export const studentGetAllActionSuccess = createAction(STUDENT_GET_ALL_SUCCESS);
export const studentGetAllActionFailure = createAction(STUDENT_GET_ALL_FAILURE);

export const levelGetAllActionInit = createAction(LEVEL_GET_ALL_INIT);
export const levelGetAllActionSuccess = createAction(LEVEL_GET_ALL_SUCCESS);
export const levelGetAllActionFailure = createAction(LEVEL_GET_ALL_FAILURE);

export const subjectGetAllActionInit = createAction(SUBJECT_GET_ALL_INIT);
export const subjectGetAllActionSuccess = createAction(SUBJECT_GET_ALL_SUCCESS);
export const subjectGetAllActionFailure = createAction(SUBJECT_GET_ALL_FAILURE);

