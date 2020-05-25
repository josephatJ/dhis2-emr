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
