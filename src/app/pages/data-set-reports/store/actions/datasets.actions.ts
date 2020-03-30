import { createAction, props } from '@ngrx/store';

export const loadDataSets = createAction(
  '[Datasets] load datasets',
  props<{ currentUser: any }>()
);

export const addLoadedDataSets = createAction(
  '[Datasets] add loaded datasets',
  props<{ dataSets: any }>()
);

export const loadingDataSetsFail = createAction(
  '[Datasets] loading datasets fail',
  props<{ error: any }>()
);
