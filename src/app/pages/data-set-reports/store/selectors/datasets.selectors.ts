import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { DataSetsState } from '../states/datasets.states';

export const getDataSetsState: MemoizedSelector<
  object,
  DataSetsState
> = createFeatureSelector<DataSetsState>('dataSets');

export const getDataSetsLoadedState = createSelector(
  getDataSetsState,
  (state: DataSetsState) => state.loaded
);

export const getLoadedDataSets = createSelector(
  getDataSetsState,
  (state: DataSetsState) => state.dataSets
);
