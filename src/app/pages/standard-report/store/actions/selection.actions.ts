import { createAction, props } from '@ngrx/store';
import { selection } from 'src/app/store/models/selections.model';

export enum SelectionActionTypes {
  UpdateSelection = '[Selection] Update Selection'
}

export const updateSelection = createAction(
  '[Selection] Update Selection',
  props<{ Selection: selection }>()
);
