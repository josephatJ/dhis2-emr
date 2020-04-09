import { createAction, props } from '@ngrx/store';

export const loadOrgUnitsGroupSets = createAction(
  '[OrgUnits group sets] load org units group sets'
);

export const addLoadedOrgUnitsGroupSets = createAction(
  '[OrgUnits group sets] add loaded ou group sets',
  props<{ groupSets: any }>()
);

export const loadingOrgUnitsGroupsSetsFail = createAction(
  '[OrgUnits group sets] loading org units groups sets fails',
  props<{ error: any }>()
);

export const loadOuWithChildren = createAction(
  '[Ou with children] load ou children',
  props<{ ou: string }>()
);

export const addLoadedOuWithChildren = createAction(
  '[Ou with children] add loaded ou',
  props<{ orgUnit: any }>()
);

export const loadingOuWithChildrenFails = createAction(
  '[Ou with children] loading ou fails',
  props<{ error: any }>()
);
