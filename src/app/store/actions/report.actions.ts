import { createAction, props } from '@ngrx/store';

export enum ReportActionTypes {
  LoadedReports = '[Report] Loaded Reports',
  SetCurrentReport = '[Report] Set Current Report'
}

export const loadedReports = createAction(
  '[Report] Loaded Reports',
  props<{ Reports: [] }>()
);

export const setCurrentReport = createAction(
  '[Report] Set Current Report',
  props<{ CurrentReport: string }>()
);
