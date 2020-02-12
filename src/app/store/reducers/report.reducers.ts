import { createReducer, on } from '@ngrx/store';
import { loadedReports, setCurrentReport } from '../actions/report.actions';
import { state } from '@angular/animations';

export const reportsInitialState = {
  reports: [],
  currentReport: ''
};

export const reducer = createReducer(
  reportsInitialState,
  on(setCurrentReport, (state, { CurrentReport }) => ({
    ...state,
    currentReport: CurrentReport
  })),
  on(loadedReports, (state, { Reports }) => ({
    ...state,
    reports: Reports
  }))
);

export function reportsReducer(state, action) {
  return reducer(state, action);
}
