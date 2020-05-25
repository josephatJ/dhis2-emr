import { createAction, props } from '@ngrx/store';

export const loadOuChildrenAsPatients = createAction(
  '[Ous as patients] load ous as patients',
  props<{ ouId: string }>()
);

export const addLoadedOuChildrenAsPatients = createAction(
  '[Ous as patients] add load ous',
  props<{ patientsBasicInfo: any }>()
);

export const loadingOuChildrenAsPatientFails = createAction(
  '[Ous as patients] loading fails',
  props<{ error: any }>()
);
export const addFacility = createAction(
  '[Facility] add facility',
  props<{ facility: any }>()
);
