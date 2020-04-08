import { createReducer, on } from '@ngrx/store';
import { initialOuState, ouAdapter } from '../states/org-units.states';
import {
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
  initialOuState,
  on(loadOuWithChildren, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedOuWithChildren, (state, { orgUnit }) =>
    ouAdapter.addOne(orgUnit, { ...state, ...loadedBaseState })
  ),
  on(loadingOuWithChildrenFails, (state, { error }) => ({
    ...state,
    error,
    ...errorBaseState
  }))
);

export function ouWithChildrenReducer(state, action) {
  return reducer(state, action);
}
