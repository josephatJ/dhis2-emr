import { createAction, props } from '@ngrx/store';
import { selection } from '../models/selections.model';

export enum SelectionActionTypes {
  UpdateSelection = '[Selection] Update Selection'
}

export const updateSelection = createAction(
  '[Selection] Update Selection',
  props<{ Selection: selection }>()
);
