import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import {
  DataSetReportState,
  dataSetReportAdapter
} from '../states/dataset-report.states';

export const getDataSetsReportsState: MemoizedSelector<
  object,
  DataSetReportState
> = createFeatureSelector<DataSetReportState>('dataSetReport');

export const {
  selectEntities: getDataSetReportsEntities,
  selectAll: getAllDataSetReports
} = dataSetReportAdapter.getSelectors(getDataSetsReportsState);

export const getDataSetReportById = createSelector(
  getDataSetReportsEntities,
  (entities, props) => entities[props.id]
);
