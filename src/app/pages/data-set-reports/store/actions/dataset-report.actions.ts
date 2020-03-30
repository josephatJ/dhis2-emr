import { createAction, props } from '@ngrx/store';

export const loadDataSetReport = createAction(
  '[Dataset Report] load data set report',
  props<{ dimensions: any }>()
);

export const addLoadedDataSetReport = createAction(
  '[Dataset Report] add loaded dataset report',
  props<{ dataSetReport: any }>()
);

export const loadingDataSetReportFail = createAction(
  '[Dataset report] loading data set report',
  props<{ error: any }>()
);
