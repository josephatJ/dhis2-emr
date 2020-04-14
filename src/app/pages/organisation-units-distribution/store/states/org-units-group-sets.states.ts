import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface OrgUnitsGroupSetsState extends BaseState, EntityState<any> {
  orgUnitsGroupSets: Array<any>;
}

export const orgUnitsGroupSetAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialOrgUnitsGroupSetsState = orgUnitsGroupSetAdapter.getInitialState(
  {
    ...initialBaseState,
    orgUnitsGroupSets: []
  }
);
