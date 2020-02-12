import { createReducer, on } from '@ngrx/store';
import { updateSelection } from '../actions/selection.actions';

export const selectionInitialState = {
  orgUnit: '',
  period: ''
};

export const reducer = createReducer(
  selectionInitialState,
  on(updateSelection, (state, { Selection }) => ({
    orgUnit: Selection.orgUnit,
    period: Selection.period
  }))
);

export function selectionReducer(state, action) {
  return reducer(state, action);
}
