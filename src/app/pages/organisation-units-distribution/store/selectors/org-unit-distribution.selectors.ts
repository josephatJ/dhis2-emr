import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import {
  OrgUnitsDistributionState,
  ousDistributionAdapter
} from '../states/org-unit-distribution.states';

const getOrgUnitDistributionState: MemoizedSelector<
  object,
  OrgUnitsDistributionState
> = createFeatureSelector<OrgUnitsDistributionState>('orgUnitsDistribution');

export const {
  selectEntities: getOrgUnitDistributionEntities,
  selectAll: getOrgUnitDistributionData
} = ousDistributionAdapter.getSelectors(getOrgUnitDistributionState);

export const getOrgUnitDistributionById = createSelector(
  getOrgUnitDistributionEntities,
  (entities, props) => entities[props.id]
);
