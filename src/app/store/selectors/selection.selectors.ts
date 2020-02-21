import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';

export const getSelectionState = createSelector(
  getRootState,
  (state: State) => state.selection
);

export const getOrgUnitState = createSelector(
  getSelectionState,
  state => state['orgUnit']
);

export const getPeriodState = createSelector(
  getSelectionState,
  state => state['period']
);
