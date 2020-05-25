import { createAction, props } from '@ngrx/store';

export const loadPrograms = createAction(
  '[Programs] load programs details',
  props<{ programsIds: Array<string> }>()
);

export const addLoadedPrograms = createAction(
  '[Programs] add loaded program details',
  props<{ program: any }>()
);

export const loadingProgramFail = createAction(
  '[Programs] loading program fail',
  props<{ error: any }>()
);
