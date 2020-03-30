import { createReducer, on } from '@ngrx/store';
import { initialDataSetsState } from '../states/datasets.states';
import {
  loadDataSets,
  addLoadedDataSets,
  loadingDataSetsFail
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from 'src/app/store/states/base.state';

const reducer = createReducer(
  initialDataSetsState,
  on(loadDataSets, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedDataSets, (state, { dataSets }) => ({
    ...state,
    dataSets,
    ...loadedBaseState
  })),
  on(loadingDataSetsFail, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  }))
);

export function dataSetsReducer(state, action) {
  return reducer(state, action);
}
