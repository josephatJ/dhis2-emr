import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { ClientsDataState } from '../states/clients-data.states';
import * as _ from 'lodash';

const clientsDataState: MemoizedSelector<
  object,
  ClientsDataState
> = createFeatureSelector<ClientsDataState>('clientsData');

// Tracked entity instance
export const getTrackedEntityInstanceLoadedState = createSelector(
  clientsDataState,
  (state: ClientsDataState) => state.loadedTrackedEntityInstance
);

export const getTrackedEntityInstancesByOu = createSelector(
  clientsDataState,
  (state: ClientsDataState, props) =>
    _.filter(state.trackedEntityInstances, { orgUnit: props.orgUnit })[0]
);

// program stage
export const getProgramStageLoadedState = createSelector(
  clientsDataState,
  (state: ClientsDataState) => state.loadedProgramStage
);

export const getProgramStageMetadataByStageId = createSelector(
  clientsDataState,
  (state: ClientsDataState, props) =>
    _.filter(state.programStageMetadata, { id: props.id })[0]
);
