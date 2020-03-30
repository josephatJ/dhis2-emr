import { createReducer, on } from '@ngrx/store';
import {
  initialDataSetDimensionsState,
  dataSetDimensionsAdapter
} from '../states/dataset-dimensions.states';
import {
  loadDataSetDimensions,
  addLoadedDataSetDimensions,
  loadingDataSetDimensionsFail
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from 'src/app/store/states/base.state';

const reducer = createReducer(
  initialDataSetDimensionsState,
  on(loadDataSetDimensions, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedDataSetDimensions, (state, { dataSetDimensions }) =>
    dataSetDimensionsAdapter.addOne(dataSetDimensions, {
      ...state,
      ...loadedBaseState
    })
  ),
  on(loadingDataSetDimensionsFail, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  }))
);

export function dataSetDimensionsReducer(state, action) {
  return reducer(state, action);
}
