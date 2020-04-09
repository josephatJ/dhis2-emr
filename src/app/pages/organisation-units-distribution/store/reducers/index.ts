import { StoreModule } from '@ngrx/store';
import { orgUniDistributionReducer } from './org-unit-distribution.reducer';
import { orgUnitsGroupSetsReducer } from './org-units-group-sets.reducer';

export const reducers: any[] = [
  StoreModule.forFeature('orgUnitsDistribution', orgUniDistributionReducer),
  StoreModule.forFeature('orgUnitsGroupSets', orgUnitsGroupSetsReducer)
];
