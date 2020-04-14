import { createReducer, on } from '@ngrx/store';
import {
  initialOrgUnitsGroupSetsState,
  orgUnitsGroupSetAdapter
} from '../states/org-units-group-sets.states';
import {
  loadOrgUnitsGroupSets,
  addLoadedOrgUnitsGroupSets,
  loadingOrgUnitsGroupsSetsFail,
  loadOuWithChildren,
  addLoadedOuWithChildren,
  loadingOuWithChildrenFails
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from 'src/app/store/states/base.state';

const reducer = createReducer(
  initialOrgUnitsGroupSetsState,
  on(loadOrgUnitsGroupSets, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedOrgUnitsGroupSets, (state, { groupSets }) => ({
    ...state,
    ...loadedBaseState,
    orgUnitsGroupSets: groupSets
  })),
  on(loadingOrgUnitsGroupsSetsFail, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  })),
  on(loadOuWithChildren, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedOuWithChildren, (state, { orgUnit }) =>
    orgUnitsGroupSetAdapter.addOne(orgUnit, { ...state, ...loadedBaseState })
  ),
  on(loadingOuWithChildrenFails, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  }))
);

export function orgUnitsGroupSetsReducer(state, action) {
  return reducer(state, action);
}
