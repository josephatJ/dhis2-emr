import {
  createSelector,
  MemoizedSelector,
  createFeatureSelector
} from '@ngrx/store';
import { StandardReportsState } from '../states/report.state';

export const getReportsState: MemoizedSelector<
  object,
  StandardReportsState
> = createFeatureSelector<StandardReportsState>('reports');

export const getReportListState = createSelector(
  getReportsState,
  (reportState: StandardReportsState) => reportState['reports']
);

export const getCurrentReportState = createSelector(
  getReportsState,
  (reportState: StandardReportsState) => reportState['currentReport']
);

export const getStandardReportsLoadingState = createSelector(
  getReportsState,
  (state: StandardReportsState) => state.loading
);
