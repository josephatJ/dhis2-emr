import { createReducer, on } from '@ngrx/store';
import { initialClientsDataState } from '../states/clients-data.states';
import {
  loadTrackedEntityInstance,
  addLoadedTrackedEntityInstance,
  loadingTrackedEntityInstanceFails,
  loadProgramStageMetadata,
  addLoadedProgramStageMetadata,
  loadingProgramStageMetadataFails
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
  })),
  on(loadProgramStageMetadata, state => ({
    ...state,
    loadingProgramStage: true
  })),
  on(addLoadedProgramStageMetadata, (state, { programStageMedatadata }) => ({
    ...state,
    loadingProgramStage: false,
    loadedProgramStage: true,
    programStageMetadata: [
      ...state.programStageMetadata,
      programStageMedatadata
    ]
  })),
  on(loadingProgramStageMetadataFails, (state, { error }) => ({
    ...state,
    programStageError: error,
    programStageHasError: true,
    loadingProgramStage: false,
    loadedProgramStage: true
  }))
);

export function clientsDataReducer(state, action) {
  return reducer(state, action);
}
