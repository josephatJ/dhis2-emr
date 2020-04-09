import { createReducer, on } from '@ngrx/store';
import {
  initialOusDistributionState,
  ousDistributionAdapter
} from '../states/org-unit-distribution.states';
import {
  loadOrgUnitsDistributionData,
  addLoadedDataForOrgUnitDistribution,
  loadingOuDistributionFails
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from 'src/app/store/states/base.state';

const reducer = createReducer(
  initialOusDistributionState,
  on(loadOrgUnitsDistributionData, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedDataForOrgUnitDistribution, (state, { orgUniDistribution }) =>
    ousDistributionAdapter.addOne(orgUniDistribution, {
      ...state,
      ...loadedBaseState
    })
  ),
  on(loadingOuDistributionFails, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  }))
);

export function orgUniDistributionReducer(state, action) {
  return reducer(state, action);
}
