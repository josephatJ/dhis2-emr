import { createReducer, on } from '@ngrx/store';
import {
  initialPatientsState,
  patientsAsOusAdapter
} from '../states/patients-as-ous.states';
import {
  loadingOuChildrenAsPatientFails,
  loadSystemAttributes,
  addLoadedAttributes,
  loadingSystemAttributesFail
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState
} from 'src/app/store/states/base.state';
import {
  initialSystemAttributesState,
  systemAttributesAdapter
} from '../states/system-attributes.states';

const reducer = createReducer(
  initialSystemAttributesState,
  on(loadSystemAttributes, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(addLoadedAttributes, (state, { attributes }) =>
    systemAttributesAdapter.addMany(attributes, {
      ...state,
      ...loadedBaseState
    })
  ),
  on(loadingSystemAttributesFail, (state, { error }) => ({
    ...state,
    error,
    ...error
  }))
);

export function SystemAttributesReducer(state, action) {
  return reducer(state, action);
}
