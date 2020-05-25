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

export const getTrackedEntityInstanceLoadingState = createSelector(
  clientsDataState,
  (state: ClientsDataState) => state.loadingTrackedEntityInstance
);

export const getTrackedEntityInstancesByOu = createSelector(
  clientsDataState,
  (state: ClientsDataState, props) =>
    _.filter(state.trackedEntityInstances, { orgUnit: props.orgUnit })[0]
);
