import { createAction, props } from '@ngrx/store';
import { DynamicDimension } from '../../models';

export const loadDataSetDimensions = createAction(
  '[Dataset Dimensions] load dimensions',
  props<{ dataSetId: string }>()
);

export const addLoadedDataSetDimensions = createAction(
  '[Dataset Dimensions] add loaded dataset dimensions',
  props<{ dataSetDimensions: any }>()
);

export const loadingDataSetDimensionsFail = createAction(
  '[Dataset Dimensions] loading data set dimensions fail',
  props<{ error: any }>()
);
