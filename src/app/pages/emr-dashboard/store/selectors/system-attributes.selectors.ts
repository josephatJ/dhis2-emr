import {
  createFeatureSelector,
  MemoizedSelector,
  createSelector
} from '@ngrx/store';
import {
  SystemAttributesState,
  systemAttributesAdapter
} from '../states/system-attributes.states';

export const getSystemAttributesState: MemoizedSelector<
  object,
  SystemAttributesState
> = createFeatureSelector<SystemAttributesState>('systemAttributes');

export const {
  selectEntities: getSystemAttributesEntities,
  selectAll: getAllSystemAttributes
} = systemAttributesAdapter.getSelectors(getSystemAttributesState);

export const getSystemAttributesLoadedState = createSelector(
  getSystemAttributesState,
  (state: SystemAttributesState) => state.loaded
);
