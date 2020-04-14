import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as _ from 'lodash';
import {
  OrgUnitsGroupSetsState,
  orgUnitsGroupSetAdapter
} from '../states/org-units-group-sets.states';

const getOrgUnitsGroupSetsState: MemoizedSelector<
  object,
  OrgUnitsGroupSetsState
> = createFeatureSelector<OrgUnitsGroupSetsState>('orgUnitsGroupSets');

export const getOrgUnitsGroupSets = createSelector(
  getOrgUnitsGroupSetsState,
  (state: OrgUnitsGroupSetsState) => state.orgUnitsGroupSets
);

// export const getOrgUnitsGroupSetById = createSelector(
//   getOrgUnitsGroupSetsState,
//   (state, props) => _.filter(state.orgUnitsGroupSets, { id: props.id })
// );

export const {
  selectEntities: getOuWithChildrenEntities,
  selectAll: getAllOus
} = orgUnitsGroupSetAdapter.getSelectors(getOrgUnitsGroupSetsState);

export const getOuWithChildrenById = createSelector(
  getOuWithChildrenEntities,
  (entities, props) => entities[props.id]
);
