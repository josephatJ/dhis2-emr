import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import {
  DataSetDimensionsState,
  dataSetDimensionsAdapter
} from '../states/dataset-dimensions.states';

export const getDataSetDimensionsState: MemoizedSelector<
  object,
  DataSetDimensionsState
> = createFeatureSelector<DataSetDimensionsState>('dataSetDimensions');

export const {
  selectEntities: getDataSetDimensionsEntities,
  selectAll: getAllDataSetsDimensions
} = dataSetDimensionsAdapter.getSelectors(getDataSetDimensionsState);

export const getDataSetDimensionsByDataSetId = createSelector(
  getDataSetDimensionsEntities,
  (entitities, props) => entitities[props.id]
);
