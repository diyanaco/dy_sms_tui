import { createAction } from '@ngrx/store';

const STUDENT_GET_ALL = '[Student Component] Retrieve data'
const LEVEL_GET_ALL = '[Student Component] Retrieve data'
const SUBJECT_GET_ALL = '[Student Component] Retrieve data'

export const studentGetAllAction = createAction(STUDENT_GET_ALL);
export const levelGetAllAction = createAction(LEVEL_GET_ALL);
export const subjectGetAllAction = createAction(SUBJECT_GET_ALL);