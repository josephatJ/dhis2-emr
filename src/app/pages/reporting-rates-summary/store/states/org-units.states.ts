import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface OrgUnitWithChildrenState extends BaseState, EntityState<any> {}

export const ouAdapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialOuState = ouAdapter.getInitialState({
  ...initialBaseState
});
