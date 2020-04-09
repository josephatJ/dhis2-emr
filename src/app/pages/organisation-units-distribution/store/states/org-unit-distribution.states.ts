import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface OrgUnitsDistributionState
  extends BaseState,
    EntityState<any> {}

export const ousDistributionAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialOusDistributionState = ousDistributionAdapter.getInitialState(
  {
    ...initialBaseState
  }
);
