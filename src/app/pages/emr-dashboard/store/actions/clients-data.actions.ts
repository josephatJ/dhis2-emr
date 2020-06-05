import { createAction, props } from '@ngrx/store';

export const loadTrackedEntityInstance = createAction(
  '[Tracked Entity Instance] load tracked entity instances by ou and program',
  props<{ dimensions: any }>()
);

export const addLoadedTrackedEntityInstance = createAction(
  '[Tracked Entity Instance] add loaded Tracked entity instances',
  props<{ trackedEntityInstance: any }>()
);

export const loadingTrackedEntityInstanceFails = createAction(
  '[Tracked Entity Instance] loading fails',
  props<{ error: any }>()
);

export const loadProgramStageMetadata = createAction(
  '[program stage] load program stage metadata',
  props<{ stageId: string }>()
);

export const addLoadedProgramStageMetadata = createAction(
  '[program stage] add loaded program stage metadata',
  props<{ programStageMedatadata: any }>()
);

export const loadingProgramStageMetadataFails = createAction(
  '[program stage] loading program stages metadata fails',
  props<{ error: any }>()
);

export const loadDoctorsRooms = createAction(
  '[Doctors rooms] load doctors rooms data',
  props<{ dimensions: any }>()
);

export const addLoadedDoctorsRooms = createAction(
  '[Doctors rooms] add loaded doctors rooms data',
  props<{ data: Array<any> }>()
);

export const loadingDoctorsRoomsFail = createAction(
  '[Doctors rooms] loading doctors rooms fail',
  props<{ error: any }>()
);
