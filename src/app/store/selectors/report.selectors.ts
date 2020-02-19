import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';

export const getReportsState = createSelector(
  getRootState,
  (state: State) => state.reports
);

export const getReportListState = createSelector(
  getReportsState,
  state => state['reports']
);

export const getCurrentReportState = createSelector(
  getReportsState,
  state => state['currentReport']
);
