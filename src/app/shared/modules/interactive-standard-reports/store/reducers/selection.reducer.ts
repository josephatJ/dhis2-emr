import { createReducer, on } from '@ngrx/store';
import { updateSelection } from '../actions/selection.actions';
import { initialSelectionState } from '../states/selection.state';

export const reducer = createReducer(
  initialSelectionState,
  on(updateSelection, (state, { Selection }) => ({
    ...state,
    orgUnit: Selection.orgUnit,
    period: Selection.period
  }))
);

export function selectionReducer(state, action) {
  return reducer(state, action);
}
