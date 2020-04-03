import { createAction, props } from '@ngrx/store';

export const loadOuWithChildren = createAction(
  '[Ou] load ou children',
  props<{ ouId: string }>()
);

export const addLoadedOuWithChildren = createAction(
  '[Ou] add loaded ou',
  props<{ orgUnit: any }>()
);

export const loadingOuWithChildrenFails = createAction(
  '[Ou] loading ou fails',
  props<{ error: any }>()
);
