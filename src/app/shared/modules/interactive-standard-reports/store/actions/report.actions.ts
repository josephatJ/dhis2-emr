import { createAction, props } from '@ngrx/store';

export const getReports = createAction(
  '[Standard Reports] load standard reports from datastore'
);

export const addLoadedReports = createAction(
  '[Standard Reports] add Loaded Reports',
  props<{ Reports: [] }>()
);

export const setCurrentReport = createAction(
  '[Standard Reports] Set Current Report',
  props<{ CurrentReport: string }>()
);

export const loadingStandardReportsFail = createAction(
  '[Standard Reports] loading standard reports fail',
  props<{ error: any }>()
);
