import { BaseState, initialBaseState } from 'src/app/store/states/base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface PatientsAsOusState extends BaseState, EntityState<any> {
  facility: string;
}

export const patientsAsOusAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialPatientsState = patientsAsOusAdapter.getInitialState({
  ...initialBaseState,
  facility: null
});
