import {
  createFeatureSelector,
  MemoizedSelector,
  createSelector
} from '@ngrx/store';
import {
  PatientsAsOusState,
  patientsAsOusAdapter
} from '../states/patients-as-ous.states';

export const getPatientsState: MemoizedSelector<
  object,
  PatientsAsOusState
> = createFeatureSelector<PatientsAsOusState>('customers');

export const {
  selectEntities: getPatientsEntities,
  selectAll: getAllPatients
} = patientsAsOusAdapter.getSelectors(getPatientsState);

export const getCustomerById = createSelector(
  getPatientsEntities,
  (entities, props) => entities[props.id]
);

export const getCustomersLoadedState = createSelector(
  getPatientsState,
  (state: PatientsAsOusState) => state.loaded
);

export const getFacility = createSelector(
  getPatientsState,
  (state: PatientsAsOusState) => state.facility
);
