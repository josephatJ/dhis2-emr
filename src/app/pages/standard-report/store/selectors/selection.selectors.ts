import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector
} from '@ngrx/store';
import { SelectionState } from '../states/selection.state';

export const getSelectionState: MemoizedSelector<
  object,
  any
> = createFeatureSelector<any>('selections');

export const getOrgUnitState = createSelector(
  getSelectionState,
  (selectionState: SelectionState) => selectionState['orgUnit']
);

export const getPeriodState = createSelector(
  getSelectionState,
  (selectionState: SelectionState) => selectionState['period']
);
