import { createReducer, on } from '@ngrx/store';
import {
  setCurrentReport,
  addLoadedReports,
  loadingStandardReportsFail
} from '../actions/report.actions';
import { initialReportState } from '../states/report.state';
import {
  errorBaseState,
  loadedBaseState
} from 'src/app/store/states/base.state';

export const reducer = createReducer(
  initialReportState,
  on(setCurrentReport, (state, { CurrentReport }) => ({
    ...state,
    currentReport: CurrentReport
  })),
  on(addLoadedReports, (state, { Reports }) => ({
    ...state,
    reports: Reports
  })),
  on(loadingStandardReportsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error,
    ...loadedBaseState
  }))
);

export function reportsReducer(state, action) {
  return reducer(state, action);
}
