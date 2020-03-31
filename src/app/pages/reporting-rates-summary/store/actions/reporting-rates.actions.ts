import { createAction, props } from '@ngrx/store';

export const loadDataSetReportingRates = createAction(
  '[Dataset Reporting Rates] load data set reporting rate',
  props<{ dimensions: any; dataSet: any }>()
);

export const addLoadedDataSetReportingRates = createAction(
  '[Dataset Reporting Rates] add loaded dataset reporting rate',
  props<{ reportingRatesReport: any }>()
);

export const loadingDataSetReportingRatesFail = createAction(
  '[Dataset Reporting Rates] loading data set reporting rate',
  props<{ error: any }>()
);
