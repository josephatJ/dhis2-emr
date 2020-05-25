import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface SystemAttributesState extends BaseState, EntityState<any> {}

export const systemAttributesAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialSystemAttributesState = systemAttributesAdapter.getInitialState(
  {
    ...initialBaseState
  }
);
