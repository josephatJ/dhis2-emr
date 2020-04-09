import { createAction, props } from '@ngrx/store';

export const loadOrgUnitsDistributionData = createAction(
  '[Org unit distribution] load org unit distribution',
  props<{ ouDimensions: any }>()
);

export const addLoadedDataForOrgUnitDistribution = createAction(
  '[Org unit distribution] add loaded data for org units distribution',
  props<{ orgUniDistribution: any }>()
);

export const loadingOuDistributionFails = createAction(
  '[Org unit distribution] loading ou distribution fails',
  props<{ error: any }>()
);
