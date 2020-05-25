import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ClientsDataState extends EntityState<any> {
  loadingTrackedEntityInstance: boolean;
  loadedTrackedEntityInstance: boolean;
  trackedEntityInstances: Array<any>;
  trackedEntityInstanceError: any;
  trackedEntityInstanceHasError: boolean;
}

export const clientsDataAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialClientsDataState = clientsDataAdapter.getInitialState({
  loadingTrackedEntityInstance: false,
  loadedTrackedEntityInstance: false,
  trackedEntityInstances: [],
  trackedEntityInstanceError: null,
  trackedEntityInstanceHasError: false
});
