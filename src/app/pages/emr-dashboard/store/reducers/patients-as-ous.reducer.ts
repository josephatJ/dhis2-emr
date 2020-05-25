import { createReducer, on } from '@ngrx/store';
import {
  initialPatientsState,
  patientsAsOusAdapter
} from '../states/patients-as-ous.states';
import {
  loadOuChildrenAsPatients,
  addLoadedOuChildrenAsPatients,
  loadingOuChildrenAsPatientFails,
  addFacility
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState
} from 'src/app/store/states/base.state';

const reducer = createReducer(
  initialPatientsState,
  on(loadOuChildrenAsPatients, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedOuChildrenAsPatients, (state, { patientsBasicInfo }) =>
    patientsAsOusAdapter.addMany(patientsBasicInfo, {
      ...state,
      ...loadedBaseState
    })
  ),
  on(loadingOuChildrenAsPatientFails, (state, { error }) => ({
    ...state,
    error,
    ...error
  })),
  on(addFacility, (state, { facility }) => ({
    ...state,
    facility
  }))
);

export function PatientsAsOusReducer(state, action) {
  return reducer(state, action);
}
