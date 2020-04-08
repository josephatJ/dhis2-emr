import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import {
  OrgUnitWithChildrenState,
  ouAdapter
} from '../states/org-units.states';

const getOuWithChildrenState: MemoizedSelector<
  object,
  OrgUnitWithChildrenState
> = createFeatureSelector<OrgUnitWithChildrenState>('ousWithChildren');

export const {
  selectEntities: getOuWithChildrenEntities,
  selectAll: getAllOus
} = ouAdapter.getSelectors(getOuWithChildrenState);

export const getOuWithChildrenById = createSelector(
  getOuWithChildrenEntities,
  (entities, props) => entities[props.id]
);
