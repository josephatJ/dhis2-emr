import { createReducer, on } from '@ngrx/store';
import { initialClientsDataState } from '../states/clients-data.states';
import {
  loadTrackedEntityInstance,
  addLoadedTrackedEntityInstance,
  loadingTrackedEntityInstanceFails
} from '../actions';

const reducer = createReducer(
  initialClientsDataState,
  on(loadTrackedEntityInstance, state => ({
    ...state,
    loadingTrackedEntityInstance: true
  })),
  on(addLoadedTrackedEntityInstance, (state, { trackedEntityInstance }) => ({
    ...state,
    loadingTrackedEntityInstance: false,
    loadedTrackedEntityInstance: true,
    trackedEntityInstances: [
      ...state.trackedEntityInstances,
      trackedEntityInstance
    ]
  })),
  on(loadingTrackedEntityInstanceFails, (state, { error }) => ({
    ...state,
    trackedEntityInstanceError: error,
    trackedEntityInstanceHasError: true,
    loadingTrackedEntityInstance: false,
    loadedTrackedEntityInstance: true
  }))
);

export function clientsDataReducer(state, action) {
  return reducer(state, action);
}
