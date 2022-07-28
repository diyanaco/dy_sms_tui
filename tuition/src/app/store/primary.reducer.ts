import { ActionReducer, createReducer, on } from '@ngrx/store';
import { studentGetAllActionInit, levelGetAllAction, subjectGetAllAction } from './primary.action';
import { initialState, PrimaryState } from './primary.state';

export const primaryReducer = createReducer(
    initialState,
    on(studentGetAllActionInit, (state) => ({ ...state, student: state.student })),
    on(levelGetAllAction, (state) => ({ ...state, level: state.level })),
    on(subjectGetAllAction, (state) => ({ ...state, subject: state.subject })),
    //   on(subjectGetAllAction, (state) => state.subject)
);