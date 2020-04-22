import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { DataSetsState } from '../states/datasets.states';
import * as _ from 'lodash';

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

export const getDatasetLoadedById = createSelector(
  getDataSetsState,
  (state: DataSetsState, props) => _.filter(state.dataSets, { id: props.id })[0]
);
