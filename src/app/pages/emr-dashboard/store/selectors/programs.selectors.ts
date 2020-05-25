import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import {
  ProgramDetailsState,
  programDetailsAdapter
} from '../states/programs.states';

const getProgramState: MemoizedSelector<
  object,
  ProgramDetailsState
> = createFeatureSelector<ProgramDetailsState>('programs');

export const {
  selectEntities: getProgramsEntities,
  selectAll: getAllPrograms
} = programDetailsAdapter.getSelectors(getProgramState);

export const getProgramsLoadedState = createSelector(
  getProgramState,
  (state: ProgramDetailsState) => state.loaded
);

export const getProgramDetailsById = createSelector(
  getProgramsEntities,
  (entities, props) => entities[props.id]
);
