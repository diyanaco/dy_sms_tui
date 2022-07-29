import { ActionReducer, createReducer, on } from '@ngrx/store';
import { studentGetAllActionSuccess,levelGetAllActionSuccess, confirmedUserGetAllActionSuccess,   subjectGetAllActionSuccess, levelGetAllActionInit, subjectGetAllActionInit, branchGetAllActionSuccess, guardianGetAllActionSuccess } from './primary.action';
import { initialState, PrimaryState } from './primary.state';

export const primaryReducer = createReducer(
    initialState,
    on(studentGetAllActionSuccess, (state, action) => {
        console.log(action)
        return{ ...state, students: action.student }
    }),
    on(levelGetAllActionSuccess, (state, action) => ({ ...state, levels: action.level })),
    on(subjectGetAllActionSuccess, (state, action) => ({ ...state, subjects: action.subject })),
    on(confirmedUserGetAllActionSuccess, (state, action) => ({ ...state, confirmed_users: action.confirmedUser })),
    on(guardianGetAllActionSuccess, (state, action) => ({ ...state, guardians: action.guardian })),
    on(branchGetAllActionSuccess, (state, action) => ({ ...state, branches: action.branch })),
    
    
    // on(levelGetAllActionInit, (state) => ({ ...state, level: state.level })),
    // on(subjectGetAllActionInit, (state) => ({ ...state, subject: state.subject })),
    //   on(subjectGetAllAction, (state) => state.subject)
);