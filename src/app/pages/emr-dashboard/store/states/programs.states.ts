import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ProgramDetailsState extends BaseState, EntityState<any> {}

export const programDetailsAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialProgramDetailsState = programDetailsAdapter.getInitialState(
  {
    ...initialBaseState
  }
);
